import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { CourseworkList } from "@/components/lists/CourseworkList";
import { EducationList } from "@/components/lists/EducationList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <PageShell title="Education">
      <EducationList />

      <div className="mt-14 border-t border-hairline pt-10">
        <SectionHeading title="Relevant coursework" />
        <CourseworkList />
      </div>
    </PageShell>
  );
}
