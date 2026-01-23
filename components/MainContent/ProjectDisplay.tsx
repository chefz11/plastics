'use client';

import React from 'react';
import { Project } from '@/types/project';
import IframeViewer from './IframeViewer';
import StaticViewer from './StaticViewer';

interface ProjectDisplayProps {
  project: Project | null;
}

export default function ProjectDisplay({ project }: ProjectDisplayProps) {
  if (!project) {
    return (
      <div className="flex items-center justify-center h-full bg-white">
        <div className="text-center text-gray-500">
          <p className="text-lg">Select a project to view</p>
        </div>
      </div>
    );
  }

  if (project.contentType === 'live' && project.url) {
    return <IframeViewer url={project.url} title={project.name} />;
  }

  if (project.contentType === 'static' && project.path) {
    return <StaticViewer path={project.path} />;
  }

  if (project.contentType === 'coming-soon') {
    return (
      <div className="flex items-center justify-center h-full bg-white">
        <div className="text-center text-gray-400">
          <p className="text-2xl font-medium">Coming Soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="text-center text-gray-500">
        <p className="text-lg">Project content not available</p>
      </div>
    </div>
  );
}
