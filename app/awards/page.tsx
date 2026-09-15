import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AwardList } from "@/components/lists/AwardList";

export const metadata: Metadata = { title: "Awards" };

export default function AwardsPage() {
  return (
    <PageShell title="Awards">
      <AwardList />
    </PageShell>
  );
}
