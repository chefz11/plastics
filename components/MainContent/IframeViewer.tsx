'use client';

import React, { useState } from 'react';

interface IframeViewerProps {
  url: string;
  title: string;
}

export default function IframeViewer({ url, title }: IframeViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-white p-8">
        <div className="text-center max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            This project can&apos;t be embedded
          </h3>
          <p className="text-gray-600 mb-6">
            Some sites prevent embedding for security reasons. You can still view it in a new tab.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open in New Tab →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading {title}...</p>
          </div>
        </div>
      )}
      <iframe
        src={url}
        title={title}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className="w-full h-full border-0"
      />
    </div>
  );
}
