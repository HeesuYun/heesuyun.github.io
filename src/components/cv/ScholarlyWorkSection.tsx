import {
  CONFERENCE_POSTERS,
  CONFERENCE_PROCEEDINGS,
  CONFERENCE_TALKS,
  PEER_REVIEWED,
  UNDER_REVIEW,
} from "../../data/cvContent";
import { CvLinkedCitationList } from "./CvLinkedCitationList";
import { CvPlainList } from "./CvPlainList";

export function ScholarlyWorkSection() {
  return (
    <section
      aria-labelledby="publications-heading"
      className="section anchor-section cv-block scholarly-work"
      id="publications"
    >
      <h2 className="section-heading" id="publications-heading">
        Publications &amp; presentations
      </h2>
      <p className="muted cv-block-intro">
        Full text mirrors the CV PDF. [pdf] / [poster] markers match the PDF;
        add links later if you host files on the site.
      </p>

      <h3 className="cv-subheading" id="peer-reviewed">
        Peer-reviewed published manuscripts
      </h3>
      <CvLinkedCitationList items={PEER_REVIEWED} />

      <h3 className="cv-subheading" id="under-review">
        Manuscripts under review
      </h3>
      <CvLinkedCitationList items={UNDER_REVIEW} />

      <h3 className="cv-subheading" id="proceedings">
        Conference proceedings
      </h3>
      <CvPlainList lines={CONFERENCE_PROCEEDINGS} />

      <h3 className="cv-subheading" id="talks">
        Conference talks
      </h3>
      <CvPlainList lines={CONFERENCE_TALKS} />

      <h3 className="cv-subheading" id="posters">
        Conference posters
      </h3>
      <CvPlainList lines={CONFERENCE_POSTERS} />
    </section>
  );
}
