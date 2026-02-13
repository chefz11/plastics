import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'roast-mutton',
    name: 'Roast Mutton',
    description: 'Lord of the Rings Reading Tracker',
    creationDate: '2026-01-20',
    codingType: 'vibe-coded',
    contentType: 'live',
    url: 'https://roastmutton.xyz',
    isBookmarked: true,
  },
  {
    id: 'portfolio',
    name: 'Portfolio (zalbright.com)',
    description: 'Personal Portfolio Site',
    creationDate: '2026-01-06',
    codingType: 'pair-coded',
    contentType: 'live',
    url: 'https://zalbright.com',
    isBookmarked: true,
  },
  {
    id: 'bookshelf',
    name: 'Bookshelf',
    description: 'Reading List Tracker',
    creationDate: '2026-01-25',
    codingType: 'vibe-coded',
    contentType: 'static',
    path: '/projects/Bookshelf/index.html',
    isBookmarked: true,
  },
  {
    id: 'peg-game',
    name: 'Peg Game',
    description: 'Cracker Barrel Triangle Peg Game',
    creationDate: '2026-01-23',
    codingType: 'vibe-coded',
    contentType: 'static',
    path: '/projects/PegGame/index.html',
    isBookmarked: true,
  },
  {
    id: 'egg',
    name: 'Egg',
    description: '3D Photo Morphing App',
    creationDate: '2026-01-28',
    codingType: 'vibe-coded',
    contentType: 'static',
    path: '/projects/Egg/index.html',
    isBookmarked: true,
  },
  {
    id: 'auto-dashboard',
    name: 'Glovebox',
    description: 'AI-Powered Car Maintenance Dashboard',
    creationDate: '2026-02-13',
    codingType: 'vibe-coded',
    contentType: 'static',
    path: '/projects/AutoDashboard/index.html',
    isBookmarked: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getBookmarkedProjects = (): Project[] => {
  return projects.filter(project => project.isBookmarked);
};
