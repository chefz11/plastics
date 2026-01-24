'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import ProjectDisplay from '@/components/MainContent/ProjectDisplay';
import MobileDrawer from '@/components/MobileDrawer/MobileDrawer';
import { projects, getProjectById } from '@/config/projects';
import { Menu } from 'lucide-react';

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectParam = searchParams.get('project');

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    projectParam || null
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) ?? null : null;

  // Sync URL param changes (only when URL changes externally)
  useEffect(() => {
    if (projectParam && projectParam !== selectedProjectId) {
      setSelectedProjectId(projectParam);
    }
  }, [projectParam]);

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    router.push(`?project=${id}`, { scroll: false });
    setIsMobileDrawerOpen(false);
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

        {/* Project Display */}
        <div className="flex-1 overflow-hidden">
          <ProjectDisplay project={selectedProject} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
