import { LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function AboutTraining() {
  return (
    <p>
      I earned my B.S. in Psychology from Boston College in May 2023, where I
      conducted research under the supervision of{" "}
      <ExternalLink href={LINKS.hartshorne}>Dr. Joshua Hartshorne</ExternalLink>
      . After graduation, I worked as a research specialist/lab manager at the{" "}
      <ExternalLink href={LINKS.trueswellLab}>
        Language Learning Lab
      </ExternalLink>{" "}
      at the University of Pennsylvania, led by{" "}
      <ExternalLink href={LINKS.trueswell}>Dr. John Trueswell</ExternalLink>.
    </p>
  );
}
