import { cvRichSegments } from "./cvRichSegments";

type CvPlainListProps = {
  lines: readonly string[];
};

export function CvPlainList({ lines }: CvPlainListProps) {
  return (
    <ul className="publication-list cv-detailed-list">
      {lines.map((line, i) => (
        <li key={i}>{cvRichSegments(line)}</li>
      ))}
    </ul>
  );
}
