import { updates } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Updates() {
  return (
    <div className="shell">
      <section id="updates" className="section">
        <SectionHeading title="Updates" index="02" aside={<span className="label !text-[0.6rem]">Along the way</span>} />
        <ol>
          {updates.map((update) => (
            <li key={update.date + update.text} className="update-row">
              <span className="label pt-1 !text-[0.625rem] tabular-nums">{update.date}</span>
              <p className="pretty text-[0.875rem] leading-[1.8] text-ink-2">
                {"href" in update && update.href ? <a href={update.href} target="_blank" rel="noopener noreferrer" className="group transition-colors hover:text-accent">{update.text}<ArrowUpRight className="ml-1 inline size-3 align-baseline text-muted group-hover:text-accent" /></a> : update.text}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
