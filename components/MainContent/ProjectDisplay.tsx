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
        <div className="text-left max-w-2xl px-8" style={{ color: '#1a1a1a' }}>
          <p className="text-base mb-4">
            <span className="logo-text" style={{ fontSize: '1rem' }}>Plastics</span> is a personal catalogue of building and learning with AI. Why &ldquo;Plastics&rdquo;?
          </p>
          <p className="text-base mb-4">
            Generative AI tools make software inexpensive the same way plastics did for physical products in the 1950s.
          </p>
          <p className="text-base mb-4">
            Sturgeon&rsquo;s law states that 90% of everything is crap. This is my attempt at sorting through to find the other 10%.
          </p>
          <p className="text-base">Zach</p>
        </div>
      </div>
    );
  }

  if (project.contentType === 'live' && project.url && project.openInNewTab) {
    return (
      <div className="flex items-center justify-center h-full bg-white p-8">
        <div className="text-center max-w-md">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h1>
          <p className="text-gray-600 mb-6">
            A personal history of finished books, watched movies, and finished games.
            {' '}Sign in to access this private app.
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Open {project.name} →
          </a>
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
      <div className="text-center" style={{ color: '#1a1a1a' }}>
        <p className="text-base">Project content not available</p>
      </div>
    </div>
  );
}
