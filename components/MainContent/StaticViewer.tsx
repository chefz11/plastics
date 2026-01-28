'use client';

import React from 'react';

interface StaticViewerProps {
  path: string;
}

export default function StaticViewer({ path }: StaticViewerProps) {
  return (
    <div className="w-full h-full bg-white">
      <iframe
        src={path}
        title="Static Project"
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-downloads"
      />
    </div>
  );
}
