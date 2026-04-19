import { LINKS } from "../../constants/links";

export function CvDownloadPanel() {
  return (
    <section
      aria-labelledby="cv-heading"
      className="section section--panel cv-download anchor-section"
      id="cv"
    >
      <h2 className="section-heading" id="cv-heading">
        Downloadable CV (PDF)
      </h2>
      <p className="cv-download__intro">
        Print-oriented PDF with the same information as this page (plus any
        formatting you prefer for applications).
      </p>
      <div className="cv-download__actions">
        <a
          className="button-link cv-download__button"
          href={LINKS.cvPdf}
          rel="noopener noreferrer"
        >
          Downloadable CV
        </a>
        <p className="cv-download__meta muted">(last updated: March 2026)</p>
      </div>
    </section>
  );
}
