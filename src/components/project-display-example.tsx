"use client";

import React from "react";
import ProjectDisplay from "./project-display";

// Example usage of the unified ProjectDisplay component
export function ProjectDisplayExamples() {
  return (
    <div>
      {/* Section variant with title (like the old projects-section.tsx) */}
      <ProjectDisplay 
        variant="section" 
        showTitle={true} 
        className="mb-16"
      />
      
      {/* Master-detail variant without title (like the old projects-master-detail.tsx) */}
      <ProjectDisplay 
        variant="master-detail" 
        showTitle={false}
        className="mt-16"
      />
      
      {/* Section variant without title for a more compact display */}
      <ProjectDisplay 
        variant="section" 
        showTitle={false}
        className="mt-16"
      />
    </div>
  );
}

// You can also use it individually:
export function ProjectsSection() {
  return <ProjectDisplay variant="section" showTitle={true} />;
}

export function ProjectsMasterDetail() {
  return <ProjectDisplay variant="master-detail" />;
}
