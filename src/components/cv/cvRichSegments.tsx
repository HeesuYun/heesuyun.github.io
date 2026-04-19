import type { ReactNode } from "react";

/**
 * Renders segments wrapped in single asterisks as <em> (matches italics in HeesuYun_CV.pdf).
 * Use literal asterisks only in pairs; unpaired `*` stays as text.
 */
export function cvRichSegments(text: string): ReactNode[] {
  const parts = text.split("*");
  return parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}
