"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { links, projects, profile, topics } from "@/lib/content";
import { useRouter } from "next/navigation";
import { asset, cx } from "@/lib/utils";
import { ArrowUpRight, Close, Search } from "@/components/ui/icons";

type Command = {
  id: string;
  label: string;
  group: "Pages" | "Elsewhere" | "Projects";
  hint?: string;
  href: string;
  external?: boolean;
};

const CommandPaletteContext = createContext<{ open: () => void }>({ open: () => {} });

export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}

function buildCommands(): Command[] {
  const pages: Command[] = [
    { id: "page-home", label: "Home", group: "Pages", hint: "/", href: "/" },
    ...topics.map((topic) => ({
      id: `page-${topic.href}`,
      label: topic.label,
      group: "Pages" as const,
      hint: topic.href,
      href: topic.href,
    })),
  ];

  const elsewhere: Command[] = [
    { id: "cv", label: "Download CV", group: "Elsewhere", hint: "PDF", href: asset(links.cv), external: true },
    { id: "email", label: `Email ${profile.firstName}`, group: "Elsewhere", hint: profile.email, href: links.email, external: true },
    { id: "scholar", label: "Google Scholar", group: "Elsewhere", hint: "Publications", href: links.scholar, external: true },
    { id: "github", label: "GitHub", group: "Elsewhere", hint: "@SasiniWanigathunga", href: links.github, external: true },
    { id: "linkedin", label: "LinkedIn", group: "Elsewhere", hint: "in/sasiniwanigathunga", href: links.linkedin, external: true },
    { id: "arxiv", label: "Seg-TTO on arXiv", group: "Elsewhere", hint: "arXiv:2501.04696", href: "https://arxiv.org/abs/2501.04696", external: true },
  ];

  const projectCommands: Command[] = projects
    .filter((p) => p.href)
    .map((p) => ({
      id: `project-${p.title}`,
      label: p.title,
      group: "Projects",
      hint: p.stack.slice(0, 2).join(" · "),
      href: p.href!,
      external: true,
    }));

  return [...pages, ...elsewhere, ...projectCommands];
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const commands = useMemo(buildCommands, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint?.toLowerCase().includes(q) || c.group.toLowerCase().includes(q),
    );
  }, [commands, query]);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  const run = useCallback(
    (command: Command) => {
      close();
      if (command.external) {
        window.open(command.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(command.href);
      }
    },
    [close, router],
  );

  // Global shortcut: Cmd/Ctrl + K.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock the page behind the overlay while it is open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Keep the highlighted row inside the scroll viewport.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  function onListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setCursor((c) => (results.length ? (c + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setCursor((c) => (results.length ? (c - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = results[cursor];
      if (target) run(target);
    }
  }

  let renderedGroup = "";

  return (
    <CommandPaletteContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="no-print fixed inset-0 z-[120] flex items-start justify-center px-4 pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
          >
            <button
              type="button"
              aria-label="Close command palette"
              onClick={close}
              className="veil absolute inset-0 cursor-default backdrop-blur-[3px]"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              onKeyDown={onListKeyDown}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: reduce ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl overflow-hidden rounded-lg border border-hairline-strong bg-surface shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-hairline px-4">
                <Search className="size-4 shrink-0 text-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCursor(0);
                  }}
                  placeholder="Search pages, projects, links…"
                  className="w-full bg-transparent py-3.5 text-[0.95rem] text-ink outline-none placeholder:text-muted"
                  aria-label="Search"
                />
                <button
                  type="button"
                  onClick={close}
                  className="shrink-0 rounded p-1 text-muted transition-colors hover:text-ink"
                  aria-label="Close"
                >
                  <Close className="size-4" />
                </button>
              </div>

              <div ref={listRef} className="max-h-[52vh] overflow-y-auto overscroll-contain p-2">
                {results.length === 0 ? (
                  <p className="px-3 py-8 text-center text-sm text-muted">No matches.</p>
                ) : (
                  results.map((command, i) => {
                    const showGroup = command.group !== renderedGroup;
                    renderedGroup = command.group;
                    const active = i === cursor;

                    return (
                      <div key={command.id}>
                        {showGroup && <p className="label px-3 pb-1.5 pt-3">{command.group}</p>}
                        <button
                          type="button"
                          data-active={active}
                          onMouseEnter={() => setCursor(i)}
                          onClick={() => run(command)}
                          className={cx(
                            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors",
                            active ? "bg-accent-soft text-ink" : "text-ink-2",
                          )}
                        >
                          <span className="truncate text-[0.925rem]">{command.label}</span>
                          {command.hint && (
                            <span className="ml-auto hidden truncate font-mono text-[0.7rem] text-muted sm:block">
                              {command.hint}
                            </span>
                          )}
                          {command.external && <ArrowUpRight className="size-3.5 shrink-0 text-muted" />}
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="flex items-center gap-4 border-t border-hairline px-4 py-2.5">
                <Key>↑↓</Key>
                <span className="text-[0.7rem] text-muted">navigate</span>
                <Key>↵</Key>
                <span className="text-[0.7rem] text-muted">open</span>
                <Key>esc</Key>
                <span className="text-[0.7rem] text-muted">close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CommandPaletteContext.Provider>
  );
}

function Key({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded border border-hairline bg-paper-2 px-1.5 py-0.5 font-mono text-[0.65rem] text-ink-2">
      {children}
    </kbd>
  );
}
