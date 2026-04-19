import type { EducationEmploymentEntry } from "../../data/cvContent";
import { cvRichSegments } from "./cvRichSegments";

type Props = {
  entries: readonly EducationEmploymentEntry[];
};

export function EducationEmploymentTimeline({ entries }: Props) {
  return (
    <ol className="cv-timeline">
      {entries.map((entry) => {
        const detail = entry.detail;
        return (
          <li className="cv-timeline__item" key={entry.period + entry.title}>
            <span className="cv-timeline__marker" aria-hidden="true" />
            <div className="cv-timeline__body">
              <p className="cv-timeline__period">{entry.period}</p>
              <p className="cv-timeline__title">{cvRichSegments(entry.title)}</p>
              {detail == null ? null : Array.isArray(detail) ? (
                detail.map((paragraph, i) => (
                  <p className="cv-timeline__detail" key={i}>
                    {cvRichSegments(paragraph)}
                  </p>
                ))
              ) : typeof detail === "string" ? (
                <p className="cv-timeline__detail">
                  {cvRichSegments(detail)}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
