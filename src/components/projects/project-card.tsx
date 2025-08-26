"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Code, Briefcase } from "lucide-react";
import ProjectHeader from "./project-header";
import TechnologyTags from "./technology-tags";
import AchievementList from "./achievement-list";
import ImpactMetrics from "./impact-metrics";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    company: string;
    role: string;
    type: string;
    typeColor: string;
    technologies: string[];
    achievements: string[];
    impact: string;
    users: string;
    confidential?: boolean;
  };
  className?: string;
  showArrow?: boolean;
}

export default function ProjectCard({ 
  project, 
  className = "", 
  showArrow = true 
}: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      className={`group relative md:perspective-1000 ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94], 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }}
      whileHover={{ rotateY: 2, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="relative p-8 rounded-2xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl border border-white/10 shadow-xl h-full transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ 
          rotateY: 5, 
          rotateX: 2, 
          transition: { 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          } 
        }}
        drag={false}
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      >
        <ProjectHeader
          title={project.title}
          company={project.company}
          role={project.role}
          type={project.type}
          typeColor={project.typeColor}
          confidential={project.confidential}
          showArrow={showArrow}
        />

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Code className="h-4 w-4" />
            Technologies Used
          </h4>
          <TechnologyTags technologies={project.technologies} />
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Key Achievements
          </h4>
          <AchievementList achievements={project.achievements} />
        </div>

        <ImpactMetrics impact={project.impact} users={project.users} />
      </motion.div>
    </motion.div>
  );
}
