import { AWARDS } from "../../data/cvContent";
import { CvPlainList } from "./CvPlainList";

export function AwardsSection() {
  return (
    <section
      aria-labelledby="awards-heading"
      className="section anchor-section cv-block"
      id="awards"
    >
      <h2 className="section-heading" id="awards-heading">
        Awards &amp; research grants
      </h2>
      <CvPlainList lines={AWARDS} />
    </section>
  );
}
