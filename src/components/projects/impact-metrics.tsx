"use client";

import React from "react";
import * as motion from "motion/react-client";
import { TrendingUp, Users } from "lucide-react";

interface ImpactMetricsProps {
  impact: string;
  users: string;
  className?: string;
}

export default function ImpactMetrics({ 
  impact, 
  users, 
  className = "" 
}: ImpactMetricsProps) {
  return (
    <div className={`flex items-center justify-between pt-4 border-t border-muted/30 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-xs font-medium text-green-500">{impact}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-500" />
          <span className="text-xs font-medium text-blue-500">{users}</span>
        </div>
      </div>
    </div>
  );
}
