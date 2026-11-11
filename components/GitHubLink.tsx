import { repositoryUrl } from '@/config/site';
import clsx from 'clsx';
import { Github } from 'lucide-react';

export default function GitHubLink({ className }: { className?: string }) {
  return (
    <a
      href={repositoryUrl}
      aria-label="Plastics source code on GitHub"
      className={clsx(
        'flex h-11 w-11 items-center justify-center rounded-lg text-sidebar-text hover:bg-sidebar-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#204ccf]',
        className
      )}
    >
      <Github size={18} aria-hidden="true" />
    </a>
  );
}
