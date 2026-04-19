import { LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

/** Third paragraph of the biography (UPenn); kept with the portrait column. */
export function AboutPhdPennsylvania() {
  return (
    <p>
      From 2023 to 2024, I worked as a research specialist and lab manager in
      the{" "}
      <ExternalLink href={LINKS.trueswellLab}>
        Language Learning Lab
      </ExternalLink>{" "}
      at the University of Pennsylvania with{" "}
      <ExternalLink href={LINKS.trueswell}>Dr. John Trueswell</ExternalLink>.
    </p>
  );
}

/** Fourth paragraph (Northeastern); full-width below the portrait. */
export function AboutPhdNortheastern() {
  return (
    <p>
      I completed my M.S. in Psychology at Northeastern University
      (2024&ndash;2026). I am now a Ph.D. student in Psychology
      (2026&ndash;present) in the{" "}
      <ExternalLink href={LINKS.qLab}>
        Language Acquisition and Brain Lab
      </ExternalLink>{" "}
      with <ExternalLink href={LINKS.qi}>Dr. Zhenghan Qi</ExternalLink>. My work
      focuses on psycholinguistics and the cognitive neuroscience of
      language&mdash;especially prediction, prediction error, and how they shape
      comprehension and production.
    </p>
  );
}
