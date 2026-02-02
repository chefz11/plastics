import { MetadataRoute } from 'next';
import { projects } from '@/config/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://plastics.zalbright.com';

  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/${project.id}`,
    lastModified: new Date(project.creationDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ];
}
