import { MENTORING } from "../../data/cvContent";
import { CvPlainList } from "./CvPlainList";

export function MentoringSection() {
  return (
    <section
      aria-labelledby="mentoring-heading"
      className="section anchor-section cv-block"
      id="mentoring"
    >
      <h2 className="section-heading" id="mentoring-heading">
        Mentoring &amp; teaching assistant experience
      </h2>
      <CvPlainList lines={MENTORING} />
    </section>
  );
}
