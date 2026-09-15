"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { links, profile, topics } from "@/lib/content";
import { asset, cx, samePath } from "@/lib/utils";
import { Close, Download, Menu, Search } from "@/components/ui/icons";
import { ThemeToggle } from "./ThemeToggle";
import { useCommandPalette } from "./CommandPalette";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { open: openPalette } = useCommandPalette();
  const reduce = useReducedMotion();

  // Close the mobile menu whenever a navigation actually happens.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      {/* Content now starts immediately below the bar on every page, so the
          bar is always opaque rather than fading in on scroll. */}
      <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-xl">
        <div className="shell-wide flex h-14 items-center gap-4 lg:pl-[17rem]">
          {/* Hidden on wide screens, where the left rail already shows the name. */}
          <Link href="/" className="serif shrink-0 text-[0.95rem] lg:hidden">
            {profile.name}
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Pages">
            {topics.map((topic) => {
              const active = samePath(pathname, topic.href);
              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "relative rounded-full px-2.5 py-1.5 text-[0.8rem] transition-colors",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-paper-2"
                      transition={
                        reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }
                      }
                    />
                  )}
                  <span className="relative">{topic.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-2">
            <button
              type="button"
              onClick={openPalette}
              aria-label="Open command palette"
              title="Search (⌘K)"
              className="hidden size-9 place-items-center rounded-full border border-hairline text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink sm:grid"
            >
              <Search className="size-[1rem]" />
            </button>

            <ThemeToggle />

            <a
              href={asset(links.cv)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[0.78rem] font-medium text-paper transition-opacity hover:opacity-85 sm:flex"
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
              <Menu className="size-[1rem]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="no-print fixed inset-0 z-[110] overflow-y-auto bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <div className="shell-wide flex h-14 items-center justify-between">
              <span className="serif text-[0.95rem]">{profile.name}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-full border border-hairline text-ink"
              >
                <Close className="size-[1rem]" />
              </button>
            </div>

            <nav className="shell-wide mt-4 flex flex-col pb-10" aria-label="Pages">
              {[{ href: "/", label: "Home" }, ...topics].map((topic, i) => (
                <motion.div
                  key={topic.href}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : 0.04 * i }}
                >
                  <Link
                    href={topic.href}
                    onClick={() => setMenuOpen(false)}
                    className={cx(
                      "serif block border-b border-hairline py-3.5 text-2xl",
                      samePath(pathname, topic.href) ? "text-accent" : "",
                    )}
                  >
                    {topic.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={asset(links.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
                >
                  <Download className="size-4" />
                  CV
                </a>
                <a
                  href={links.email}
                  className="flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-2.5 text-sm"
                >
                  Email
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
