"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { projects as allProjects } from "./projects-data";
import { Briefcase, Code, TrendingUp, Users, ArrowUpRight, Monitor, Smartphone, Database } from "lucide-react";

const typeIconMap = {
  web: Monitor,
  mobile: Smartphone,
  blockchain: Database,
  saas: Database,
  SaaS: Database,
} as const;

const getTypeLabel = (type: string): string => {
  const labels = {
    blockchain: "Blockchain/DApp",
    mobile: "Mobile App",
    web: "Web Platform",
    saas: "SaaS",
  };
  return labels[type as keyof typeof labels] || "Project";
};

const getItemClassName = (isSelected: boolean, isActive: boolean): string => {
  const baseClasses = "w-full text-left rounded-xl border border-white/10 p-4 transition-all duration-300";
  
  if (isSelected) {
    return `${baseClasses} bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 border-primary/40 shadow-lg`;
  }
  
  if (isActive) {
    return `${baseClasses} bg-gradient-to-br from-accent/20 via-accent/15 to-accent/10 border-accent/30`;
  }
  
  return `${baseClasses} bg-gradient-to-br from-background/60 via-background/40 to-background/20 hover:from-accent/20 hover:to-accent/10 hover:border-accent/20`;
};

export default function ProjectsMasterDetail() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  
  const filtered = useMemo(() => allProjects, []);
  
  const selected = useMemo(() => 
    filtered.find((p) => p.id === selectedId) ?? filtered[0] ?? null, 
    [filtered, selectedId]
  );
  
  const totalProjects = filtered.length;
  
  useEffect(() => {
    if (!totalProjects) return;
    
    try {
      const stored = localStorage.getItem("projects:selectedId");
      if (stored && filtered.some((p) => p.id === stored)) {
        setSelectedId(stored);
        const idx = filtered.findIndex((p) => p.id === stored);
        setActiveIndex(idx >= 0 ? idx : 0);
        return;
      }
    } catch {}
    
    setSelectedId(filtered[0].id);
    setActiveIndex(0);
  }, [filtered, totalProjects]);
  
  useEffect(() => {
    if (selectedId) {
      try {
        localStorage.setItem("projects:selectedId", selectedId);
      } catch {}
    }
  }, [selectedId]);
  
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);
  
  const handleItemClick = useCallback((id: string, index: number) => {
    setSelectedId(id);
    setActiveIndex(index);
  }, []);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!totalProjects) return;
    
    const handlers: Record<string, () => void> = {
      ArrowDown: () => setActiveIndex((prev) => (prev + 1) % totalProjects),
      ArrowUp: () => setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects),
      Home: () => setActiveIndex(0),
      End: () => setActiveIndex(totalProjects - 1),
      Enter: () => {
        const item = filtered[activeIndex];
        if (item) {
          setSelectedId(item.id);
          (e.currentTarget as HTMLElement).blur();
        }
      },
      " ": () => {
        const item = filtered[activeIndex];
        if (item) {
          setSelectedId(item.id);
          (e.currentTarget as HTMLElement).blur();
        }
      },
    };
    
    const handler = handlers[e.key];
    if (handler) {
      e.preventDefault();
      handler();
    }
  }, [totalProjects, filtered, activeIndex]);
  
  const renderProjectItem = useCallback((project: typeof filtered[0], index: number) => {
    const isSelected = selectedId === project.id;
    const isActive = activeIndex === index;
    
    return (
      <li key={project.id}>
        <button
          ref={(el) => { itemRefs.current[index] = el }}
          onClick={() => handleItemClick(project.id, index)}
          className={getItemClassName(isSelected, isActive)}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-foreground">
                {project.title}
              </div>
              <div className="truncate text-xs text-muted-foreground/80">
                {project.role}
              </div>
            </div>
            <div className="shrink-0 text-[10px] px-2 py-1 rounded-full bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border border-muted/30">
              {getTypeLabel(project.type)}
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded-lg border border-white/10 px-2 py-1 text-[10px] text-foreground/80 bg-gradient-to-r from-muted/40 to-muted/20">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-lg border border-white/10 px-2 py-1 text-[10px] text-foreground/80 bg-gradient-to-r from-muted/40 to-muted/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </button>
      </li>
    );
  }, [selectedId, activeIndex, handleItemClick]);
  
  if (!selected) {
    return (
      <section className="py-16 md:py-24 lg:py-32">
        <div className="px-4 md:px-6 w-full">
          <div className="rounded-2xl border p-10 text-center text-muted-foreground">
            No project found
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl shadow-xl">
              <div
                className="max-h-[70%] overflow-y-auto pr-1 focus:outline-none rounded-xl"
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                <ul className="space-y-3">
                  {filtered.map(renderProjectItem)}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={selected.id}
              className="group relative md:perspective-1000"
              initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ rotateY: 2, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl border border-white/10 shadow-xl h-full transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 5, rotateX: 2, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
                drag={false}
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className={`p-2 rounded-lg bg-gradient-to-br ${selected.typeColor} shadow-sm opacity-80`} 
                        whileHover={{ rotate: 2, scale: 1.05 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {typeIconMap[selected.type as keyof typeof typeIconMap] && 
                          React.createElement(typeIconMap[selected.type as keyof typeof typeIconMap], { className: "h-4 w-4 text-white" })
                        }
                      </motion.div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        {getTypeLabel(selected.type)}
                      </span>
                      {selected.confidential && (
                        <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full border border-orange-500/20">
                          Confidential
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {selected.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      {selected.company} — {selected.role}
                    </p>
                  </div>
                  <motion.div 
                    className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors duration-300" 
                    whileHover={{ scale: 1.1, rotate: 5 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border border-muted/30 hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/30 shadow-sm cursor-default backdrop-blur-sm relative overflow-hidden"
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + techIndex * 0.08, type: "spring", stiffness: 200, damping: 20 }}
                        whileHover={{ y: -3, rotateY: 10, transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 10 } }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" 
                          initial={{ x: "-100%" }} 
                          whileHover={{ x: "100%" }} 
                          transition={{ duration: 0.6, ease: "easeInOut" }} 
                        />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selected.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex} 
                        className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2" 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 + achievementIndex * 0.08, ease: "easeOut" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-medium text-green-500">{selected.impact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-xs font-medium text-blue-500">{selected.users}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


