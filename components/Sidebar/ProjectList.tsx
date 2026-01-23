import React from 'react';
import { Project } from '@/types/project';
import ProjectItem from './ProjectItem';

interface ProjectListProps {
  projects: Project[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function ProjectList({ projects, selectedId, onSelect }: ProjectListProps) {
  const bookmarkedProjects = projects
    .filter(p => p.isBookmarked)
    .sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());

  return (
    <div className="flex-1 overflow-y-auto">
      {bookmarkedProjects.length > 0 && (
        <div className="sidebar-section">
          <div className="space-y-1">
            {bookmarkedProjects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                isSelected={selectedId === project.id}
                onClick={() => onSelect(project.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
