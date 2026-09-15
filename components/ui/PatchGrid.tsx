"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * Decorative halo of patches around the profile photo. Cells sit in a ring
 * between two radii and settle in an anticlockwise sweep.
 *
 * Fully deterministic - no randomness - so server and client render identical
 * markup and there is nothing to hydrate-mismatch.
 */
const N = 13;
const CELL = 10;
const SIZE = N * CELL;
const CENTER = SIZE / 2;
/**
 * The ring has to clear the photo on the inside and stay inside the grid's
 * own edge on the outside. A cell centre can be at most 60 units from the
 * centre along an axis, so an OUTER above that clips the diagonals only and
 * the halo comes out as a cross rather than a ring.
 */
const INNER = 39;
const OUTER = 57;
const GAP = 1.6;

const HUES = ["var(--seg-1)", "var(--seg-2)", "var(--seg-3)", "var(--seg-4)", "var(--seg-5)"];

type Patch = { key: string; x: number; y: number; fill: string; opacity: number; delay: number };

export function PatchGrid({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const patches = useMemo<Patch[]>(() => {
    const out: Patch[] = [];

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        const x = col * CELL;
        const y = row * CELL;
        const dx = x + CELL / 2 - CENTER;
        const dy = y + CELL / 2 - CENTER;
        const distance = Math.hypot(dx, dy);
        if (distance < INNER || distance > OUTER) continue;

        // 0 at due east, increasing anticlockwise - drives both hue and order.
        const angle = (Math.atan2(dy, dx) + Math.PI) / (Math.PI * 2);

        out.push({
          key: `${row}-${col}`,
          x: x + GAP / 2,
          y: y + GAP / 2,
          fill: HUES[Math.floor(angle * HUES.length) % HUES.length],
          // Fade out toward the rim so the halo has a soft edge.
          opacity: 0.55 * (1 - (distance - INNER) / (OUTER - INNER)) + 0.12,
          delay: angle * 1.1,
        });
      }
    }
    return out;
  }, []);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={`size-full ${className}`}
      role="presentation"
      aria-hidden
    >
      {patches.map((p) => (
        <motion.rect
          key={p.key}
          x={p.x}
          y={p.y}
          width={CELL - GAP}
          height={CELL - GAP}
          rx={1.4}
          fill={p.fill}
          initial={reduce ? { opacity: p.opacity } : { opacity: 0, scale: 0.3 }}
          animate={{ opacity: p.opacity, scale: 1 }}
          style={{ transformOrigin: `${p.x + CELL / 2}px ${p.y + CELL / 2}px` }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.25 + p.delay, ease: [0.16, 1, 0.3, 1] }
          }
        />
      ))}
    </svg>
  );
}
