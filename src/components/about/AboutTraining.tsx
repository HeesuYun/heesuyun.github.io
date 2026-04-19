import { LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function AboutTraining() {
  return (
    <p>
      I earned my B.S. in Psychology (Cum Laude) from Boston College
      (2018&ndash;2023), supervised by{" "}
      <ExternalLink href={LINKS.hartshorne}>Dr. Joshua Hartshorne</ExternalLink>
      . My honors thesis examined how linguistic structure in a first language
      relates to second-language acquisition among English learners from 32
      distinct first-language backgrounds.
    </p>
  );
}
