import React from 'react';
import { Project } from '@/types/project';
import clsx from 'clsx';

interface ProjectItemProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

export default function ProjectItem({ project, isSelected, onClick }: ProjectItemProps) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCodingTypeLabel = (type: Project['codingType']): string => {
    switch (type) {
      case 'vibe-coded':
        return 'Vibed';
      case 'pair-coded':
        return 'Paired';
      case 'manual':
        return 'Manual';
    }
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        'project-item',
        isSelected && 'project-item-active'
      )}
    >
      <h3 className="text-sidebar-text font-medium text-sm">{project.name}</h3>
      <p className="text-sidebar-muted text-xs mt-0.5">
        {formatDate(project.creationDate)} · {getCodingTypeLabel(project.codingType)}
      </p>
    </div>
  );
}
