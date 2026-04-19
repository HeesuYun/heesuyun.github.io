import { LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function AboutPhd() {
  return (
    <p>
      I am currently pursuing a Ph.D. in Cognitive Psychology at Northeastern
      University, working with{" "}
      <ExternalLink href={LINKS.qi}>Dr. Zhenghan Qi</ExternalLink> in the{" "}
      <ExternalLink href={LINKS.qLab}>
        Language Acquisition and Brain Lab
      </ExternalLink>
      . My research focuses on the role of prediction error in language
      comprehension and production.
    </p>
  );
}
