import type { LinkedCitation } from "../../data/cvContent";
import { ExternalLink } from "../ExternalLink";

type CvLinkedCitationListProps = {
  items: readonly LinkedCitation[];
};

export function CvLinkedCitationList({ items }: CvLinkedCitationListProps) {
  return (
    <ul className="publication-list cv-detailed-list">
      {items.map((row, i) => (
        <li key={i}>
          {row.citation}{" "}
          <ExternalLink href={row.href}>{row.linkLabel}</ExternalLink>
        </li>
      ))}
    </ul>
  );
}
