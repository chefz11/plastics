import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center" style={{ color: '#1a1a1a' }}>
        <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
        <p className="text-base mb-6">The project you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
