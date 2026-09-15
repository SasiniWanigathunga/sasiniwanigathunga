import { links, publications } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="relative scroll-mt-24 border-t border-hairline bg-paper-2/40 py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Research"
          title={
            <>
              Segmentation models are confident right up until the domain
              changes. <span className="text-accent">Seg-TTO</span> closes that gap.
            </>
          }
          lede="Open-vocabulary segmenters generalise impressively in the open world and then fall over on specialised imagery — medical scans, aerial survey, industrial inspection. Seg-TTO adapts the model at test time, with no labels and no retraining."
          aside={
            <a
              href={links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="label link-underline inline-flex items-center gap-1.5 hover:!text-ink"
            >
              Google Scholar
              <ArrowUpRight className="size-3" />
            </a>
          }
        />

        <div className="space-y-8">
          {publications.map((pub) => (
            <Reveal key={pub.title}>
              <article className="card-shadow group relative overflow-hidden rounded-lg border border-hairline bg-surface">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-hairline px-6 py-3.5 md:px-9">
                  <span className="label !text-[0.625rem] !text-accent">{pub.year}</span>
                  <span className="font-mono text-[0.7rem] text-muted">{pub.venue}</span>
                  <span className="ml-auto rounded-full border border-hairline bg-paper-2 px-2.5 py-1 font-mono text-[0.65rem] text-ink-2">
                    {pub.status}
                  </span>
                </div>

                <div className="grid gap-8 px-6 py-8 md:grid-cols-12 md:gap-10 md:px-9 md:py-10">
                  <div className="md:col-span-7">
                    <h3 className="serif text-[length:var(--text-title)] leading-[1.1] balance">
                      {pub.title}
                    </h3>

                    <p className="mt-5 text-[0.875rem] leading-relaxed text-muted">
                      {pub.authors.map((author, i) => (
                        <span key={author.name}>
                          <span className={author.isMe ? "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4" : ""}>
                            {author.name}
                          </span>
                          {author.equalContribution && <sup className="text-accent">*</sup>}
                          {i < pub.authors.length - 1 && <span>, </span>}
                        </span>
                      ))}
                    </p>
                    <p className="mt-2 font-mono text-[0.65rem] text-muted">* Equal contribution</p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {pub.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-4 py-2 text-[0.8rem] text-ink-2 transition-colors hover:border-ink hover:text-ink"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <p className="label mb-3">Abstract</p>
                    <p className="text-[0.9rem] leading-[1.7] text-ink-2 pretty">{pub.abstract}</p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 divide-y divide-hairline border-t border-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {pub.highlights.map((h) => (
                    <div key={h.label} className="px-6 py-5 md:px-9">
                      <dt className="sr-only">{h.label}</dt>
                      <dd>
                        <span className="serif block text-3xl leading-none text-accent">{h.value}</span>
                        <span className="mt-2 block text-[0.8rem] leading-snug text-muted">{h.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
