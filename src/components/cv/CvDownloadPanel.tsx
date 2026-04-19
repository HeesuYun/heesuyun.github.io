import { LINKS } from "../../constants/links";

export function CvDownloadPanel() {
  return (
    <section className="section section--panel cv-download">
      <h1>Curriculum vitae</h1>
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
