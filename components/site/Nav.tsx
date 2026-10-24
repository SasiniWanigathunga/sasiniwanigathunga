"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/lib/content";
import { cx, samePath } from "@/lib/utils";
import { ArrowUpRight, Close, Menu, Search } from "@/components/ui/icons";
import { ThemeToggle } from "./ThemeToggle";
import { useCommandPalette } from "./CommandPalette";

export function Nav() {
  const pathname = usePathname();
  const { open: openPalette } = useCommandPalette();
  const dialog = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { dialog.current?.close(); }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header no-print fixed inset-x-0 top-0 z-50 border-b border-hairline">
        <div className="flex h-[4.5rem] items-center gap-5 px-5 sm:px-8">
          <Link href="/" aria-label={`${profile.name} — Home`} className="group flex shrink-0 items-center gap-3">
            <span className="grid size-8 place-items-center rounded border border-hairline-strong font-mono text-xs tracking-[-0.1em] text-accent group-hover:border-accent">sw.</span>
            <span className="font-mono text-[0.7rem] tracking-tight text-ink-2">sasini<span className="hidden text-muted sm:inline"> / portfolio</span></span>
          </Link>
          <nav className="ml-auto hidden h-full items-center xl:flex" aria-label="Pages">
            {navItems.map((topic) => <Link key={topic.href} href={topic.href} aria-current={samePath(pathname, topic.href) ? "page" : undefined} className="nav-link">{topic.label}</Link>)}
          </nav>
          <div className="ml-auto flex items-center gap-2 xl:ml-2">
            <button type="button" onClick={openPalette} aria-label="Open command palette" title="Search (Ctrl/⌘ K)" className="icon-button"><Search className="size-4" /></button>
            <ThemeToggle />
            <button type="button" onClick={() => { dialog.current?.showModal(); setMenuOpen(true); }} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu" className="icon-button xl:hidden"><Menu className="size-4" /></button>
          </div>
        </div>
      </header>
      <dialog ref={dialog} id="mobile-menu" aria-label="Navigation" onClose={() => setMenuOpen(false)} className="no-print fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-paper p-0 text-ink backdrop:bg-paper">
        <div className="flex h-[4.5rem] items-center justify-between border-b border-hairline px-6"><span className="label">Navigation</span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close menu" className="icon-button"><Close className="size-4" /></button></div>
        <nav className="mx-auto max-w-2xl px-6 py-6" aria-label="Mobile pages">
          {navItems.map((topic, i) => <Link key={topic.href} href={topic.href} onClick={() => dialog.current?.close()} aria-current={samePath(pathname, topic.href) ? "page" : undefined} className={cx("flex items-center gap-5 border-b border-hairline py-4 text-xl tracking-tight", samePath(pathname, topic.href) && "text-accent")}><span className="font-mono text-[0.65rem] text-muted">{String(i).padStart(2, "0")}</span>{topic.label}<ArrowUpRight className="ml-auto size-4 text-muted" /></Link>)}
        </nav>
      </dialog>
    </>
  );
}
