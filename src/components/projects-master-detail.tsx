"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects as allProjects } from "./projects-data";
import ProjectListItem from "./projects/project-list-item";
import ProjectCard from "./projects/project-card";

export default function ProjectsMasterDetail() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  
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
    <div className="container relative">
        {/* Mobile-First Stack Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
          
          {/* Desktop Project List (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl shadow-xl">
              <div
                className="max-h-[70%] overflow-y-auto pr-1 focus:outline-none rounded-xl"
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                <ul className="space-y-3">
                  {filtered.map((project, index) => (
                    <ProjectListItem
                      key={project.id}
                      project={project}
                      isSelected={selectedId === project.id}
                      isActive={activeIndex === index}
                      onClick={handleItemClick}
                      index={index}
                      ref={(el) => { itemRefs.current[index] = el }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Project List (Horizontal Scrollable) */}
          <div className="lg:hidden mb-0">
            <div className="rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl shadow-xl">
              <div className="flex gap-2 overflow-x-auto py-1 snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                {filtered.map((project, index) => (
                  <div
                    key={project.id}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full border snap-start transition-all duration-200 cursor-pointer ${
                      selectedId === project.id
                        ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-primary/40 scale-105'
                        : 'bg-gradient-to-r from-background/60 to-background/40 border-white/10 hover:from-accent/20 hover:to-accent/10 hover:border-accent/20'
                    }`}
                    onClick={() => handleItemClick(project.id, index)}
                  >
                    <div className="flex items-center gap-2">
                      {project.confidential && (
                        <span className="text-xs">🔒</span>
                      )}
                      <span className={`text-xs font-medium whitespace-nowrap ${
                        selectedId === project.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {project.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details - Full Width on Mobile, 8/12 on Desktop */}
          <div className="lg:col-span-8 w-full">
            <ProjectCard project={selected} />
          </div>
        </div>
      </div>
  );
}




