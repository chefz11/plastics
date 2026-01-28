'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import MobileDrawer from '@/components/MobileDrawer/MobileDrawer';
import { projects } from '@/config/projects';
import { Menu } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
  selectedProjectId: string | null;
}

export default function AppShell({ children, selectedProjectId }: AppShellProps) {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleProjectSelect = (id: string) => {
    router.push(`/${id}`, { scroll: false });
    setIsMobileDrawerOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/', { scroll: false });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
          projects={projects}
          onLogoClick={handleLogoClick}
        />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileDrawerOpen} onClose={() => setIsMobileDrawerOpen(false)}>
        <Sidebar
          isCollapsed={false}
          onToggle={() => setIsMobileDrawerOpen(false)}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
          projects={projects}
          onLogoClick={handleLogoClick}
        />
      </MobileDrawer>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-sidebar-border bg-white">
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
          <h1 className="logo-text">Plastics</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
