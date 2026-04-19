import { LINKS } from "../../constants/links";

export function CvDownloadPanel() {
  return (
    <section className="section section--panel">
      <h1>Curriculum vitae</h1>
      <p>
        <a className="button-link" href={LINKS.cvPdf} rel="noopener noreferrer">
          Downloadable CV
        </a>{" "}
        <span className="muted">(last updated: March 2026)</span>
      </p>
    </section>
  );
}
