import type { CvCitationLine } from "../../data/cvContent";
import { ExternalLink } from "../ExternalLink";
import { cvRichSegments } from "./cvRichSegments";

type CvCitationListProps = {
  lines: readonly CvCitationLine[];
};

export function CvCitationList({ lines }: CvCitationListProps) {
  return (
    <ul className="publication-list cv-detailed-list">
      {lines.map((line, i) => (
        <li key={i}>
          <span className="cv-citation-line__text">
            {cvRichSegments(line.citation)}
          </span>
          {(line.pdfUrl ?? line.posterUrl) ? (
            <span className="cv-citation-line__suffix">
              {line.pdfUrl ? (
                <>
                  {" "}
                  <ExternalLink
                    className="cv-citation-line__link"
                    href={line.pdfUrl}
                  >
                    [pdf]
                  </ExternalLink>
                </>
              ) : null}
              {line.posterUrl ? (
                <>
                  {" "}
                  <ExternalLink
                    className="cv-citation-line__link"
                    href={line.posterUrl}
                  >
                    [poster]
                  </ExternalLink>
                </>
              ) : null}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
