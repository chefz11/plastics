'use client';

import React from 'react';

interface StaticViewerProps {
  path: string;
  title?: string;
}

export default function StaticViewer({ path, title = 'Static Project' }: StaticViewerProps) {
  return (
    <div className="w-full h-full bg-white">
      <iframe
        src={path}
        title={title}
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-downloads"
      />
    </div>
  );
}
