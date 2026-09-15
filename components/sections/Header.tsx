"use client";

import { motion, useReducedMotion } from "framer-motion";
import { links, profile } from "@/lib/content";
import { asset } from "@/lib/utils";
import { Download, Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";
import { PatchGrid } from "@/components/ui/PatchGrid";

const contactLinks = [
  { label: "Email", href: links.email, Icon: Mail },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "GitHub", href: links.github, Icon: Github },
  { label: "Google Scholar", href: links.scholar, Icon: Scholar },
];

export function Header() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.2 : 0.7,
      delay: reduce ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <header id="top" className="shell pt-24 text-center md:pt-32">
      {/* Photo, with the patch grid resolving behind it. */}
      <motion.div
        {...fade(0)}
        className="relative mx-auto grid size-60 place-items-center md:size-64"
      >
        <PatchGrid className="absolute inset-0 -z-10 opacity-70" />
        <img
          src={asset(profile.photo)}
          alt={profile.name}
          width={460}
          height={460}
          className="size-32 rounded-full border border-hairline object-cover shadow-sm md:size-36"
        />
      </motion.div>

      <motion.h1 {...fade(0.12)} className="serif mt-7 text-4xl tracking-[-0.02em] md:text-5xl">
        {profile.name}
      </motion.h1>

      <motion.p {...fade(0.18)} className="mt-3 text-[0.95rem] text-ink-2">
        {profile.subtitle}
      </motion.p>

      <motion.p {...fade(0.22)} className="label mt-2.5 !text-[0.625rem]">
        {profile.location}
      </motion.p>

      <motion.nav
        {...fade(0.28)}
        aria-label="Contact and profiles"
        className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-2"
      >
        {contactLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline px-3.5 py-1.5 text-[0.8rem] text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
          >
            <Icon className="size-3.5 text-muted transition-colors group-hover:text-accent" />
            {label}
          </a>
        ))}
        <a
          href={asset(links.cv)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-[0.8rem] font-medium text-paper transition-opacity hover:opacity-85"
        >
          <Download className="size-3.5" />
          CV
        </a>
      </motion.nav>
    </header>
  );
}
