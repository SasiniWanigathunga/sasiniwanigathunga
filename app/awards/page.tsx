import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AwardList, LeadershipList } from "@/components/lists/AwardList";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Awards" };

export default function AwardsPage() {
  return (
    <PageShell title="Awards">
      <AwardList />

      <div className="mt-14 border-t border-hairline pt-10">
        <Reveal>
          <h2 className="serif mb-7 flex items-baseline gap-3 text-2xl">
            <span aria-hidden className="inline-block size-2 shrink-0 rounded-[1px] bg-accent" />
            Leadership
          </h2>
        </Reveal>
        <LeadershipList />
      </div>
    </PageShell>
  );
}
