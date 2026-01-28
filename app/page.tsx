import AppShell from '@/components/AppShell';
import ProjectDisplay from '@/components/MainContent/ProjectDisplay';

export default function Home() {
  return (
    <AppShell selectedProjectId={null}>
      <ProjectDisplay project={null} />
    </AppShell>
  );
}
