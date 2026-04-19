import { CONTACT_EMAIL, LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function ContactDetails() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="section section--panel contact-panel anchor-section"
      id="contact"
    >
      <h2 className="section-heading" id="contact-heading">
        Contact
      </h2>
      <p className="contact-intro">
        Reach out for collaborations, talks, or questions about ongoing work.
      </p>
      <ul className="contact-list">
        <li>
          <span className="contact-label">Location</span> Boston, MA
        </li>
        <li>
          <span className="contact-label">Email</span>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
        <li>
          <span className="contact-label">Web</span>{" "}
          <ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink>
        </li>
      </ul>
    </section>
  );
}
