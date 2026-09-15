import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { SkillList } from "@/components/lists/SkillList";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <PageShell title="Skills">
      <SkillList />
    </PageShell>
  );
}
