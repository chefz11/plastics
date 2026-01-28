import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/config/projects';
import AppShell from '@/components/AppShell';
import ProjectDisplay from '@/components/MainContent/ProjectDisplay';

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: 'Project Not Found - Plastics',
    };
  }

  return {
    title: `${project.name} - Plastics`,
    description: project.description,
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
