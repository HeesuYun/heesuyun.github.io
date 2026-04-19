import {
  CONFERENCE_POSTERS,
  CONFERENCE_PROCEEDINGS,
  CONFERENCE_TALKS,
  PEER_REVIEWED,
  UNDER_REVIEW,
} from "../../data/cvContent";
import { CvCitationList } from "./CvCitationList";
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
        Publications &amp; Presentations
      </h2>

      <h3 className="cv-subheading" id="peer-reviewed">
        Peer-Reviewed Published Manuscripts
      </h3>
      <CvLinkedCitationList items={PEER_REVIEWED} />

      <h3 className="cv-subheading" id="under-review">
        Manuscripts Under Review
      </h3>
      <CvLinkedCitationList items={UNDER_REVIEW} />

      <h3 className="cv-subheading" id="proceedings">
        Conference Proceedings
      </h3>
      <CvCitationList lines={CONFERENCE_PROCEEDINGS} />

      <h3 className="cv-subheading" id="talks">
        Conference Talks
      </h3>
      <CvPlainList lines={CONFERENCE_TALKS} />

      <h3 className="cv-subheading" id="posters">
        Conference Posters
      </h3>
      <CvCitationList lines={CONFERENCE_POSTERS} />
    </section>
  );
}
