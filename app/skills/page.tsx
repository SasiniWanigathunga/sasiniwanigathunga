import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { CourseworkList, SkillList } from "@/components/lists/SkillList";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <PageShell title="Skills">
      <SkillList />

      <div className="mt-14 border-t border-hairline pt-10">
        <Reveal>
          <h2 className="serif mb-7 flex items-baseline gap-3 text-2xl">
            <span aria-hidden className="inline-block size-2 shrink-0 rounded-[1px] bg-accent" />
            Relevant Coursework
          </h2>
        </Reveal>
        <CourseworkList />
      </div>
    </PageShell>
  );
}
