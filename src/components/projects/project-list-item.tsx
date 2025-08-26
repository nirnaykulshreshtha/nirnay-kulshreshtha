"use client";

import React, { forwardRef } from "react";

interface ProjectListItemProps {
  project: {
    id: string;
    title: string;
    company: string;
    role: string;
    type: string;
    technologies: string[];
    confidential?: boolean;
  };
  isSelected: boolean;
  isActive: boolean;
  onClick: (id: string, index: number) => void;
  index: number;
  className?: string;
}

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

const ProjectListItem = forwardRef<HTMLLIElement, ProjectListItemProps>(({
  project,
  isSelected,
  isActive,
  onClick,
  index,
  className = ""
}, ref) => {
  return (
    <li ref={ref} className={className}>
      <button
        onClick={() => onClick(project.id, index)}
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
});

ProjectListItem.displayName = "ProjectListItem";

export default ProjectListItem;
