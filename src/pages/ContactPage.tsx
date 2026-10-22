import { ExternalLink } from "../components/ExternalLink";
import { PageMain } from "../components/PageMain";
import { CONTACT_EMAIL, CV_LAST_UPDATED, LINKS } from "../constants/links";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { stagger } from "../utils/stagger";

export function ContactPage() {
  useDocumentTitle("Contact & CV · Heesu Yun");

  return (
    <PageMain>
      <h1 className="page-title rise" style={stagger(0)}>
        Contact &amp; CV
      </h1>
      <div className="contact">
        <section aria-labelledby="contact-heading" className="contact__details">
          <h2 className="visually-hidden" id="contact-heading">
            Contact
          </h2>
          <p className="contact__intro rise" style={stagger(1)}>
            Reach out for collaborations, talks, or questions about ongoing
            work.
          </p>
          <a
            className="contact__email rise"
            href={`mailto:${CONTACT_EMAIL}`}
            style={stagger(2)}
          >
            {CONTACT_EMAIL}
          </a>
          <dl className="contact__list">
            <div className="rise" style={stagger(3)}>
              <dt>Lab</dt>
              <dd>
                <ExternalLink href={LINKS.qLab}>
                  Language Acquisition and Brain Lab
                </ExternalLink>
                , Northeastern University
              </dd>
            </div>
            <div className="rise" style={stagger(4)}>
              <dt>Location</dt>
              <dd>Boston, MA</dd>
            </div>
            <div className="rise" style={stagger(5)}>
              <dt>LinkedIn</dt>
              <dd>
                <ExternalLink href={LINKS.linkedin}>
                  linkedin.com/in/heesuyun
                </ExternalLink>
              </dd>
            </div>
          </dl>
        </section>
        <section
          aria-labelledby="cv-heading"
          className="cv-panel rise"
          id="cv"
          style={stagger(3)}
        >
          <h2
            className="section-heading rise"
            id="cv-heading"
            style={stagger(4)}
          >
            CV
          </h2>
          <p className="rise" style={stagger(5)}>
            The full CV, with education, talks, posters, awards and professional
            memberships, as a PDF for printing or uploading to forms.
          </p>
          <ExternalLink
            className="button-link button-link--solid"
            href={LINKS.cvPdf}
          >
            Download CV (PDF)
          </ExternalLink>
          <p className="cv-panel__meta rise" style={stagger(6)}>
            Last updated {CV_LAST_UPDATED}
          </p>
        </section>
      </div>
    </PageMain>
  );
}
