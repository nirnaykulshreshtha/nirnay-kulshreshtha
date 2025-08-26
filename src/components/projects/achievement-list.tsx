"use client";

import React from "react";
import * as motion from "motion/react-client";

interface AchievementListProps {
  achievements: string[];
  className?: string;
  delayOffset?: number;
}

export default function AchievementList({ 
  achievements, 
  className = "", 
  delayOffset = 0 
}: AchievementListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {achievements.map((achievement, achievementIndex) => (
        <motion.li
          key={achievementIndex}
          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delayOffset + achievementIndex * 0.08, 
            ease: "easeOut" 
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
          {achievement}
        </motion.li>
      ))}
    </ul>
  );
}
