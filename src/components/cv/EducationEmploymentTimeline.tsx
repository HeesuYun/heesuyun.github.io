import type { EducationEmploymentEntry } from "../../data/cvContent";

type Props = {
  entries: readonly EducationEmploymentEntry[];
};

export function EducationEmploymentTimeline({ entries }: Props) {
  return (
    <ol className="cv-timeline">
      {entries.map((entry) => (
        <li className="cv-timeline__item" key={entry.period + entry.title}>
          <span className="cv-timeline__marker" aria-hidden="true" />
          <div className="cv-timeline__body">
            <p className="cv-timeline__period">{entry.period}</p>
            <p className="cv-timeline__title">{entry.title}</p>
            {entry.detail ? (
              <p className="cv-timeline__detail">{entry.detail}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
