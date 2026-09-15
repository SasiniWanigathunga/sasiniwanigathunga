import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { EducationList } from "@/components/lists/EducationList";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <PageShell title="Education">
      <EducationList />
    </PageShell>
  );
}
