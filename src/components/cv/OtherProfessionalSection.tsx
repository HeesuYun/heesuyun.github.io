import {
  LANGUAGES,
  PROFESSIONAL_MEMBERSHIPS,
  SOFTWARE_TOOLS,
} from "../../data/cvContent";
import { CvPlainList } from "./CvPlainList";

export function OtherProfessionalSection() {
  return (
    <section
      aria-labelledby="other-heading"
      className="section anchor-section cv-block"
      id="other"
    >
      <h2 className="section-heading" id="other-heading">
        Other professional
      </h2>

      <h3 className="cv-subheading" id="memberships">
        Professional memberships
      </h3>
      <CvPlainList lines={PROFESSIONAL_MEMBERSHIPS} />

      <h3 className="cv-subheading" id="software">
        Software &amp; tools
      </h3>
      <CvPlainList lines={SOFTWARE_TOOLS} />

      <h3 className="cv-subheading" id="languages">
        Languages
      </h3>
      <CvPlainList lines={LANGUAGES} />
    </section>
  );
}
