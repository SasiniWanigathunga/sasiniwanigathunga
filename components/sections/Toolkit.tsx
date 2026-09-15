import { certifications, toolkit } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Toolkit() {
  return (
    <section id="toolkit" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        index="04"
        eyebrow="Toolkit"
        title="What I reach for."
        lede="Grouped by what they are for rather than by how impressive the list looks."
      />

      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {toolkit.map((group, i) => (
          <Reveal key={group.group} delay={0.05 * i}>
            <div>
              <h3 className="label border-b border-hairline pb-3">{group.group}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-baseline gap-3 text-[0.95rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    <span
                      aria-hidden
                      className="h-px w-3 shrink-0 bg-hairline-strong transition-all group-hover:w-5 group-hover:bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-20 border-t border-hairline pt-10">
          <h3 className="label mb-6">Certifications</h3>
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <p className="serif text-[1.05rem] leading-snug text-ink">{cert.title}</p>
                <p className="mt-1 text-[0.8rem] text-muted">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
