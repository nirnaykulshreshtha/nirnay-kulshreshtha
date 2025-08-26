"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Briefcase, Sparkles } from 'lucide-react';
import { ProjectsSection } from "./projects-section";
import ProjectsMasterDetail from "./projects-master-detail";

interface ProjectDisplayProps {
  variant: 'section' | 'master-detail';
  className?: string;
}

export default function ProjectDisplay({ 
  variant, 
  className = "" 
}: ProjectDisplayProps) {
  return (
    <section className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${className}`}>
      {/* Enhanced decorative background with parallax - desktop only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        {/* Floating sparkles - desktop only */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Sparkles className="h-6 w-6 text-primary/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Sparkles className="h-4 w-4 text-secondary/40" />
        </motion.div>
      </div>
      
      <div className="container relative">
        {/* Title Section - Always visible for both variants */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.2
          }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3, 
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Briefcase className="h-5 w-5" />
            <span>Featured Projects</span>
          </motion.div>
          
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5, 
              ease: "easeOut"
            }}
          >
            My Creative Journey
          </motion.h2>
          
          <motion.p
            className="mb-0 font-text text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Showcasing work across web, mobile, and blockchain. 
          </motion.p>
          <motion.p
            className="font-text text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
          Each project highlights innovation and impact.
          </motion.p>
          
        </motion.div>

        {/* Render the appropriate component based on variant */}
        {variant === 'section' ? (
          <ProjectsSection />
        ) : (
          <ProjectsMasterDetail />
        )}
      </div>
    </section>
  );
}
