import { EDUCATION_EMPLOYMENT } from "../../data/cvContent";
import { CvPlainList } from "./CvPlainList";

export function EducationSection() {
  return (
    <section
      aria-labelledby="education-heading"
      className="section anchor-section cv-block"
      id="education"
    >
      <h2 className="section-heading" id="education-heading">
        Employment &amp; education
      </h2>
      <CvPlainList lines={EDUCATION_EMPLOYMENT} />
    </section>
  );
}
