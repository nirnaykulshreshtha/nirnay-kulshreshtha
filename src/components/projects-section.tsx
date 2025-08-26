"use client";

import * as motion from "motion/react-client";
import React from "react";
import {
  Briefcase,
  Sparkles
} from 'lucide-react';
import { projects } from "./projects-data";
import { ProjectCard } from "./projects";

export function ProjectsSection() {
  return (
    <div className="container relative">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              className="group relative md:perspective-1000"
              initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8 + projectIndex * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                transition: { duration: 0.1 }
              }}
            >
              <ProjectCard 
                project={project} 
                className="h-full"
                showArrow={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
  );
} 