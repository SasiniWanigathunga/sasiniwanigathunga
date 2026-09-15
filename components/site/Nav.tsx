"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useState } from "react";
import { links, nav, profile } from "@/lib/content";
import { asset, cx } from "@/lib/utils";
import { ArrowUpRight, Close, Download, Menu, Search } from "@/components/ui/icons";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "./useActiveSection";
import { useCommandPalette } from "./CommandPalette";

const SECTION_IDS = nav.map((n) => n.id);

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { open: openPalette } = useCommandPalette();
  const reduce = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <>
      <header
        className={cx(
          "no-print fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-hairline bg-paper/80 backdrop-blur-xl" : "border-b border-transparent",
        )}
      >
        <div className="shell flex h-16 items-center gap-4 md:h-[4.5rem]">
          <a href="#top" className="group flex shrink-0 items-center gap-2.5" aria-label="Back to top">
            <span className="grid size-8 place-items-center rounded-full border border-hairline-strong font-mono text-[0.7rem] font-medium tracking-tight text-ink transition-colors group-hover:border-accent group-hover:text-accent">
              SW
            </span>
            <span
              className={cx(
                "serif hidden text-[0.95rem] transition-all duration-500 sm:block",
                scrolled ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
              )}
            >
              {profile.name}
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Sections">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cx(
                  "relative rounded-full px-3 py-1.5 text-[0.825rem] transition-colors",
                  active === item.id ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-paper-2"
                    transition={
                      reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }
                    }
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <button
              type="button"
              onClick={openPalette}
              aria-label="Open command palette"
              className="hidden items-center gap-2 rounded-full border border-hairline py-1.5 pl-3 pr-2 text-[0.8rem] text-muted transition-colors hover:border-hairline-strong hover:text-ink sm:flex"
            >
              <Search className="size-3.5" />
              <span className="hidden md:inline">Search</span>
              <kbd className="rounded border border-hairline bg-paper-2 px-1.5 py-0.5 font-mono text-[0.65rem]">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            <a
              href={asset(links.cv)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[0.8rem] font-medium text-paper transition-opacity hover:opacity-85 sm:flex"
            >
              <Download className="size-3.5" />
              CV
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full border border-hairline text-ink lg:hidden"
            >
              <Menu className="size-[1.05rem]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="no-print fixed inset-0 z-[110] bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <div className="shell flex h-16 items-center justify-between">
              <span className="serif text-[0.95rem]">{profile.name}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-full border border-hairline text-ink"
              >
                <Close className="size-[1.05rem]" />
              </button>
            </div>

            <nav className="shell mt-6 flex flex-col" aria-label="Sections">
              {nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.04 * i }}
                  className="serif flex items-baseline gap-4 border-b border-hairline py-4 text-3xl"
                >
                  <span className="label !text-[0.6rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="shell mt-8 flex flex-wrap gap-3">
              <a
                href={asset(links.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
              >
                <Download className="size-4" />
                Download CV
              </a>
              <a
                href={links.email}
                className="flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-2.5 text-sm"
              >
                Email
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
