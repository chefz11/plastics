'use client';

import React from 'react';
import { Project } from '@/types/project';
import SidebarHeader from './SidebarHeader';
import ProjectList from './ProjectList';
import clsx from 'clsx';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  selectedProjectId: string | null;
  onProjectSelect: (id: string) => void;
  projects: Project[];
  className?: string;
  onLogoClick?: () => void;
}

export default function Sidebar({
  isCollapsed,
  onToggle,
  selectedProjectId,
  onProjectSelect,
  projects,
  className,
  onLogoClick,
}: SidebarProps) {
  return (
    <div
      className={clsx(
        'h-full bg-sidebar-bg flex flex-col border-r border-sidebar-border transition-all duration-300',
        isCollapsed ? 'w-sidebar-collapsed' : 'w-sidebar',
        className
      )}
    >
      <SidebarHeader isCollapsed={isCollapsed} onToggle={onToggle} onLogoClick={onLogoClick} />
      {!isCollapsed && (
        <ProjectList
          projects={projects}
          selectedId={selectedProjectId}
          onSelect={onProjectSelect}
        />
      )}
      {!isCollapsed && (
        <div className="mt-auto p-4 flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#204ccf' }}
          />
          <span className="text-sidebar-text text-sm font-helvetica font-bold">Zach Albright</span>
        </div>
      )}
    </div>
  );
}
