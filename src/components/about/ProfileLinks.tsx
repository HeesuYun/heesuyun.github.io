import { CONTACT_EMAIL, LINKS } from "../../constants/links";
import { stagger } from "../../utils/stagger";
import { ExternalLink } from "../ExternalLink";

export function ProfileLinks() {
  return (
    <ul className="profile-links" aria-label="Elsewhere">
      <li className="rise" style={stagger(2)}>
        <a className="button-link" href={`mailto:${CONTACT_EMAIL}`}>
          Email
        </a>
      </li>
      <li className="rise" style={stagger(3)}>
        <ExternalLink className="button-link" href={LINKS.linkedin}>
          LinkedIn
        </ExternalLink>
      </li>
      <li className="rise" style={stagger(4)}>
        <ExternalLink className="button-link" href={LINKS.cvPdf}>
          CV (PDF)
        </ExternalLink>
      </li>
    </ul>
  );
}
