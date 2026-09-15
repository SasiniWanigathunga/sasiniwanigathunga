"use client";

import { motion, useReducedMotion } from "framer-motion";
import { links, metrics, profile } from "@/lib/content";
import { asset } from "@/lib/utils";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";
import { RevealWords } from "@/components/ui/Reveal";
import { SegmentationMotif } from "@/components/ui/SegmentationMotif";

const social = [
  { label: "Google Scholar", href: links.scholar, Icon: Scholar },
  { label: "GitHub", href: links.github, Icon: Github },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "Email", href: links.email, Icon: Mail },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <BackdropRules />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Statement */}
          <div className="lg:col-span-7">
            <motion.div {...fade(0.05)} className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="flex items-center gap-2 rounded-full border border-hairline bg-surface/60 py-1 pl-2 pr-3 backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                <span className="label !text-[0.625rem] !text-ink-2">{profile.role}</span>
              </span>
              <a
                href={profile.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline !text-[0.625rem] hover:!text-ink"
              >
                {profile.company}
              </a>
            </motion.div>

            <h1 className="serif mt-6 text-[length:var(--text-display)] leading-[0.88] tracking-[-0.035em]">
              <RevealWords text={profile.firstName} className="block" delay={0.15} />
              <RevealWords
                text={profile.lastName}
                className="block text-muted"
                delay={0.24}
              />
            </h1>

            <motion.p
              {...fade(0.5)}
              className="serif mt-8 max-w-[34ch] text-2xl leading-[1.28] text-ink-2 balance md:text-[1.75rem]"
            >
              I build vision–language systems that hold up{" "}
              <em className="not-italic text-accent">outside the datasets</em> they were trained on.
            </motion.p>

            <motion.div {...fade(0.62)} className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                Read the research
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={asset(links.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-hairline-strong px-6 py-3 text-sm transition-colors hover:border-ink"
              >
                Curriculum vitae
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.ul {...fade(0.72)} className="mt-10 flex items-center gap-1">
              {social.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-paper-2 hover:text-accent"
                  >
                    <Icon className="size-[1.1rem]" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Signature visual */}
          <motion.div
            {...fade(0.35)}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <SegmentationMotif />
          </motion.div>
        </div>
      </div>

      <MetricsMarquee />
    </section>
  );
}

/** Faint vertical column rules — the editorial grid, left visible. */
function BackdropRules() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="shell relative h-full">
        <div className="absolute inset-y-0 left-1/4 w-px bg-hairline/60" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-hairline/60" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-hairline/60" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(60%_50%_at_20%_0%,var(--c-accent-soft),transparent_70%)] opacity-70" />
    </div>
  );
}

/**
 * Headline numbers, scrolling. The track is duplicated so the -50% keyframe
 * lands on an identical frame and the loop is seamless.
 */
function MetricsMarquee() {
  const row = [...metrics, ...metrics];

  return (
    <div className="relative mt-20 border-y border-hairline bg-paper-2/50 py-4 md:mt-28">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max shrink-0 items-center gap-12 pr-12 motion-reduce:animate-none">
          {row.map((m, i) => (
            <div key={`${m.value}-${i}`} className="flex items-baseline gap-2.5 whitespace-nowrap">
              <span className="serif text-xl text-accent md:text-2xl">{m.value}</span>
              <span className="text-[0.8rem] text-ink-2">{m.label}</span>
              <span className="label !text-[0.6rem]">{m.context}</span>
              <span aria-hidden className="ml-8 text-hairline-strong">
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
