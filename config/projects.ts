import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'roast-mutton',
    name: 'Roast Mutton',
    description: 'Lord of the Rings reading tracker',
    creationDate: '2025-01-15',
    codingType: 'vibe-coded',
    contentType: 'live',
    url: 'https://roastmutton.xyz',
    isBookmarked: true,
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Personal portfolio site',
    creationDate: '2024-11-20',
    codingType: 'manual',
    contentType: 'live',
    url: 'https://zalbright.com',
    isBookmarked: true,
  },
  {
    id: 'bookshelf',
    name: 'Bookshelf',
    description: 'Reading list tracker',
    creationDate: '2025-01-23',
    codingType: 'vibe-coded',
    contentType: 'coming-soon',
    isBookmarked: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getBookmarkedProjects = (): Project[] => {
  return projects.filter(project => project.isBookmarked);
};
