"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently under the reading line (a third of the
 * way down the viewport). Used to light up the nav and the margin rail.
 */
export function useActiveSection(ids: string[]): string {
  // Starts empty so nothing is highlighted while the visitor is still in the
  // hero, above every tracked section.
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // A callback only reports sections whose visibility *changed*, so the
    // running set is kept here rather than derived from `entries` alone —
    // otherwise the hero would inherit whichever section was last seen.
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Among everything crossing the reading line, take the topmost.
        const topmost = ids.find((id) => visible.has(id));
        setActive(topmost ?? "");
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
