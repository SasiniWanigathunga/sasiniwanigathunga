import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { LeadershipList } from "@/components/lists/LeadershipList";

export const metadata: Metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <PageShell title="Leadership">
      <LeadershipList />
    </PageShell>
  );
}
