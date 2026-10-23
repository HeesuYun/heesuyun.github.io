import { LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function AboutBio() {
  return (
    <div className="about-bio">
      <p>
        I am a Ph.D. student in Psychology (2026&ndash;present) at Northeastern
        University, working in the{" "}
        <ExternalLink href={LINKS.qLab}>
          Language Acquisition and Brain Lab
        </ExternalLink>{" "}
        with <ExternalLink href={LINKS.qi}>Dr. Zhenghan Qi</ExternalLink>. My
        work focuses on psycholinguistics and the cognitive neuroscience of
        language, especially prediction, prediction error, and how they shape
        comprehension and production.
      </p>
      <p>
        From 2023 to 2024, I worked as a research specialist/lab manager in the{" "}
        <ExternalLink href={LINKS.trueswellLab}>
          Language Learning Lab
        </ExternalLink>{" "}
        at the University of Pennsylvania with{" "}
        <ExternalLink href={LINKS.trueswell}>Dr. John Trueswell</ExternalLink>.
      </p>
      <p>
        I earned my B.S. in Psychology from Boston College (2018&ndash;2023),
        where I was supervised by{" "}
        <ExternalLink href={LINKS.hartshorne}>
          Dr. Joshua Hartshorne
        </ExternalLink>
        . My honors thesis examined how the linguistic structure of a first
        language relates to second-language acquisition among English learners
        from 32 different first-language backgrounds.
      </p>
    </div>
  );
}
