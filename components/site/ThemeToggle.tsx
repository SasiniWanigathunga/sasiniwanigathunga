"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/ui/icons";

type Theme = "light" | "dark";
const STORAGE_KEY = "sw-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  // The real theme is set pre-paint by the inline script in layout.tsx;
  // this just syncs React up with whatever that decided.
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) ?? "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage - the toggle still works for
      // this page view, it just will not be remembered.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`grid size-9 place-items-center rounded-full border border-hairline text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink ${className}`}
    >
      {/* Render nothing until mounted so the icon never contradicts the page. */}
      <span className={mounted ? "" : "opacity-0"}>
        {theme === "dark" ? <Sun className="size-[1.05rem]" /> : <Moon className="size-[1.05rem]" />}
      </span>
    </button>
  );
}
