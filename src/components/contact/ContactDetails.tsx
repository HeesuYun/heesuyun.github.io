import { CONTACT_EMAIL, LINKS } from "../../constants/links";
import { ExternalLink } from "../ExternalLink";

export function ContactDetails() {
  return (
    <section className="section">
      <h1>Contact</h1>
      <ul className="contact-list">
        <li>
          <span aria-hidden="true">&#128205;</span> Boston, MA
        </li>
        <li>
          <span aria-hidden="true">&#9993;&#65039;</span> Email:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
        <li>
          <span aria-hidden="true">&#128187;</span>{" "}
          <ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink>
        </li>
      </ul>
    </section>
  );
}
