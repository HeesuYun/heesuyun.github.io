import { LINKS } from "../../constants/links";

export function CvDownloadPanel() {
  return (
    <section
      aria-labelledby="cv-heading"
      className="section section--panel cv-download anchor-section"
      id="cv"
    >
      <h2 className="section-heading" id="cv-heading">
        CV (PDF)
      </h2>
      <p className="cv-download__intro">
        A traditional PDF for applications, references, and other requests. It
        reflects the same education, research, and publications shown on this
        site, in a layout suited for printing or uploading to forms.
      </p>
      <div className="cv-download__actions">
        <a
          className="button-link cv-download__button"
          href={LINKS.cvPdf}
          rel="noopener noreferrer"
        >
          Download CV (PDF)
        </a>
        <p className="cv-download__meta muted">Last updated March 2026</p>
      </div>
    </section>
  );
}
