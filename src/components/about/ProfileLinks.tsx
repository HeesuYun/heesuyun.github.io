import { CONTACT_EMAIL, LINKS } from "../../constants/links";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { stagger } from "../../utils/stagger";
import { ExternalLink } from "../ExternalLink";

/** Button text per copy status; on failure the address is shown so it can be copied by hand. */
const EMAIL_LABELS = {
  idle: "Email",
  copied: "Email copied",
  failed: CONTACT_EMAIL,
} as const;

export function ProfileLinks() {
  const { status, copy } = useCopyToClipboard();

  return (
    <ul className="profile-links" aria-label="Elsewhere">
      <li className="rise" style={stagger(2)}>
        <button
          className="button-link"
          data-status={status}
          onClick={() => copy(CONTACT_EMAIL)}
          title={`Copy ${CONTACT_EMAIL}`}
          type="button"
        >
          {EMAIL_LABELS[status]}
        </button>
        <span aria-live="polite" className="visually-hidden">
          {status === "copied" ? `${CONTACT_EMAIL} copied to clipboard` : ""}
        </span>
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
