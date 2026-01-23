import React from 'react';
import Image from 'next/image';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function SidebarHeader({ isCollapsed, onToggle }: SidebarHeaderProps) {
  if (isCollapsed) {
    return (
      <div className="flex items-center justify-center p-4">
        <button
          onClick={onToggle}
          className="logo-text text-sidebar-text hover:opacity-70 transition-opacity"
          aria-label="Expand sidebar"
        >
          P
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-4">
      <span className="logo-text text-sidebar-text">Plastics</span>
      <button
        onClick={onToggle}
        className="p-2 hover:bg-sidebar-hover rounded-lg transition-colors"
        aria-label="Collapse sidebar"
      >
        <Image
          src="/sidebaricon.svg"
          alt="Toggle sidebar"
          width={20}
          height={18}
          className="opacity-70"
        />
      </button>
    </div>
  );
}
