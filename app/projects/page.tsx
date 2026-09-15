import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { PageShell } from "@/components/site/PageShell";
import { ProjectList } from "@/components/lists/ProjectList";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageShell title="Projects" aside={<span className="label">{projects.length}</span>}>
      <ProjectList />
    </PageShell>
  );
}
