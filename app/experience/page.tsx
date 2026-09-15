import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ExperienceList } from "@/components/lists/ExperienceList";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <PageShell title="Experience">
      <ExperienceList />
    </PageShell>
  );
}
