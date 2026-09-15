"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * Abstract hero graphic: a patch grid whose regions resolve in sequence.
 * Decoration only — it carries no claim and no text.
 *
 * The mask is hand-authored and static, so server and client render the same
 * markup and there is nothing to hydrate-mismatch.
 */
const MASK = [
  "111111111111",
  "111111111111",
  "111111112211",
  "111111222221",
  "111112222221",
  "111112222211",
  "133111222211",
  "133311122111",
  "133333111111",
  "133333331111",
  "443333333444",
  "444333334444",
  "444444444444",
  "444445554444",
  "444455554444",
] as const;

const COLS = 12;
const ROWS = MASK.length;
const CELL = 10;
const PAD = 0.85;

/** Paint order — the ground settles first, the accent region arrives last. */
const REGION_ORDER: Record<string, number> = { "1": 0, "4": 1, "2": 2, "3": 3, "5": 4 };

const REGION_STYLE: Record<string, { fill: string; opacity: number }> = {
  "1": { fill: "var(--c-hairline-strong)", opacity: 0.55 },
  "2": { fill: "var(--seg-2)", opacity: 0.5 },
  "3": { fill: "var(--seg-4)", opacity: 0.58 },
  "4": { fill: "var(--seg-3)", opacity: 0.4 },
  "5": { fill: "var(--seg-1)", opacity: 0.92 },
};

type Cell = { key: string; x: number; y: number; region: string; order: number };

export function SegmentationMotif() {
  const reduce = useReducedMotion();

  const cells = useMemo<Cell[]>(() => {
    const perRegionCount: Record<string, number> = {};
    const out: Cell[] = [];

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const region = MASK[row][col];
        const seen = perRegionCount[region] ?? 0;
        perRegionCount[region] = seen + 1;
        out.push({
          key: `${row}-${col}`,
          x: col * CELL + PAD,
          y: row * CELL + PAD,
          region,
          // Regions land in sequence; cells within a region ripple quickly.
          order: REGION_ORDER[region] * 0.5 + seen * 0.012,
        });
      }
    }
    return out;
  }, []);

  return (
    <div className="relative w-full max-w-[26rem] select-none">
      {/* Frame */}
      <div className="relative rounded-sm border border-hairline bg-surface/70 p-3 backdrop-blur-sm sm:p-4">
        <CornerTicks />

        <svg
          viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
          className="w-full"
          role="presentation"
          aria-hidden
        >
          {/* Empty patch lattice sitting under the mask. */}
          <g>
            {cells.map((c) => (
              <rect
                key={`grid-${c.key}`}
                x={c.x}
                y={c.y}
                width={CELL - PAD * 2}
                height={CELL - PAD * 2}
                rx={1.4}
                fill="none"
                stroke="var(--c-hairline)"
                strokeWidth={0.35}
              />
            ))}
          </g>

          {/* The mask itself. */}
          <g>
            {cells.map((c) => {
              const style = REGION_STYLE[c.region];
              return (
                <motion.rect
                  key={`mask-${c.key}`}
                  x={c.x}
                  y={c.y}
                  width={CELL - PAD * 2}
                  height={CELL - PAD * 2}
                  rx={1.4}
                  fill={style.fill}
                  initial={reduce ? { opacity: style.opacity } : { opacity: 0, scale: 0.35 }}
                  animate={{ opacity: style.opacity, scale: 1 }}
                  style={{ transformOrigin: `${c.x + CELL / 2}px ${c.y + CELL / 2}px` }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: 0.55, delay: 0.35 + c.order, ease: [0.16, 1, 0.3, 1] }
                  }
                />
              );
            })}
          </g>

          {/* A single sweep as the grid settles. */}
          {!reduce && (
            <motion.rect
              x={0}
              width={COLS * CELL}
              height={0.9}
              fill="var(--c-accent)"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, ROWS * CELL], opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: 2.4, delay: 0.5, times: [0, 0.08, 0.9, 1], ease: "easeInOut" }}
            />
          )}
        </svg>
      </div>
    </div>
  );
}

/** Technical-drawing corner marks. Pure decoration. */
function CornerTicks() {
  const corner = "absolute size-2.5 border-accent/50";
  return (
    <span aria-hidden>
      <span className={`${corner} -left-px -top-px border-l border-t`} />
      <span className={`${corner} -right-px -top-px border-r border-t`} />
      <span className={`${corner} -bottom-px -left-px border-b border-l`} />
      <span className={`${corner} -bottom-px -right-px border-b border-r`} />
    </span>
  );
}
