import type { CSSProperties } from "react";

/** Entrance order for `.rise` elements; the delay is computed in CSS from `--i`. */
export function stagger(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}
