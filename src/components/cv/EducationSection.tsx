import { EDUCATION_EMPLOYMENT_TIMELINE } from "../../data/cvContent";
import { EducationEmploymentTimeline } from "./EducationEmploymentTimeline";

export function EducationSection() {
  return (
    <section
      aria-labelledby="education-heading"
      className="section anchor-section cv-block"
      id="education"
    >
      <h2 className="section-heading" id="education-heading">
        Employment &amp; Education
      </h2>
      <EducationEmploymentTimeline entries={EDUCATION_EMPLOYMENT_TIMELINE} />
    </section>
  );
}
