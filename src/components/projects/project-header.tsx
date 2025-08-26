"use client";

import React from "react";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";

interface ProjectHeaderProps {
  title: string;
  company: string;
  role: string;
  type: string;
  typeColor: string;
  confidential?: boolean;
  showArrow?: boolean;
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

export default function ProjectHeader({
  title,
  company,
  role,
  type,
  typeColor,
  confidential = false,
  showArrow = true,
  className = ""
}: ProjectHeaderProps) {
  return (
    <div className={`flex items-start justify-between mb-6 ${className}`}>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            className={`p-2 rounded-lg bg-gradient-to-br ${typeColor} shadow-sm opacity-80`}
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="h-4 w-4 text-white">
              {/* Icon placeholder - you can add actual icons here */}
            </div>
          </motion.div>
          <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            {getTypeLabel(type)}
          </span>
          {confidential && (
            <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full border border-orange-500/20">
              Confidential
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-medium">
          {company} — {role}
        </p>
      </div>
      {showArrow && (
        <motion.div
          className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </motion.div>
      )}
    </div>
  );
}
