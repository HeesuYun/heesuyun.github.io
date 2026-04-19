import { INVITED_TALKS } from "../../data/cvContent";
import { CvPlainList } from "./CvPlainList";

export function InvitedTalksSection() {
  return (
    <section
      aria-labelledby="invited-heading"
      className="section anchor-section cv-block"
      id="invited"
    >
      <h2 className="section-heading" id="invited-heading">
        Invited Talks
      </h2>
      <CvPlainList lines={INVITED_TALKS} />
    </section>
  );
}
