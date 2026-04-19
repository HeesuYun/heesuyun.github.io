import { LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function PublicationsHighlights() {
  return (
    <section
      aria-labelledby="publications-heading"
      className="section anchor-section publications-section"
      id="publications"
    >
      <h2 className="section-heading" id="publications-heading">
        Selected publications
      </h2>
      <ul className="publication-list">
        <li>
          Gomes, V., Huh, Y., Yun, H., &amp; Trueswell, J. C. (2026). Failure is
          always an option: Children&rsquo;s production of truth-functional
          negation and its implications for learning. <em>Cognition</em>, 267,
          106342. <ExternalLink href={LINKS.cognition2026}>DOI</ExternalLink>
        </li>
        <li>
          Weng, Y.-L., Yun, H., Owen Van Horne, A., &amp; Qi, Z. (under review).
          The development of the relationship between distributional learning
          and prediction in language.{" "}
          <ExternalLink href={LINKS.psyarxivUnderReview}>
            PsyArXiv preprint
          </ExternalLink>
        </li>
      </ul>
      <p className="muted publications-more">
        Conference proceedings, talks, posters, invited presentations, and the
        full bibliography are listed in the downloadable CV.
      </p>
    </section>
  );
}
