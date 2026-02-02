import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/config/projects';
import AppShell from '@/components/AppShell';
import ProjectDisplay from '@/components/MainContent/ProjectDisplay';

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

const siteUrl = 'https://plastics.zalbright.com';

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const projectUrl = `${siteUrl}/${project.id}`;
  const ogImageUrl = project.thumbnail
    ? project.thumbnail
    : `/api/og?title=${encodeURIComponent(project.name)}&description=${encodeURIComponent(project.description)}`;

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url: projectUrl,
      siteName: 'Plastics',
      type: 'article',
      publishedTime: project.creationDate,
      authors: ['Zach Albright'],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.name} - ${project.description}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <AppShell selectedProjectId={projectId}>
      <ProjectDisplay project={project} />
    </AppShell>
  );
}
