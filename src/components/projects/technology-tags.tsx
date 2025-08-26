"use client";

import React from "react";
import * as motion from "motion/react-client";

interface TechnologyTagsProps {
  technologies: string[];
  className?: string;
  showShimmer?: boolean;
}

export default function TechnologyTags({ 
  technologies, 
  className = "", 
  showShimmer = true 
}: TechnologyTagsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, techIndex) => (
        <motion.span
          key={tech}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border border-muted/30 hover:from-primary/15 hover:to-secondary/15 hover:text-primary hover:border-primary/30 shadow-sm cursor-default backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2 + techIndex * 0.08, 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
          }}
          whileHover={{ 
            y: -3, 
            rotateY: 10, 
            transition: { 
              duration: 0.3, 
              type: "spring", 
              stiffness: 400, 
              damping: 10 
            } 
          }}
        >
          {showShimmer && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
          <span className="relative z-10">{tech}</span>
        </motion.span>
      ))}
    </div>
  );
}
