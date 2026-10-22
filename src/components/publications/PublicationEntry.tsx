import { SELF_AUTHOR_NAMES, type Publication } from "../../data/publications";
import { ExternalLink } from "../ExternalLink";
import { richText } from "../richText";

/** Bolds this site's author in a citation's author list. */
function authorLine(authors: string) {
  const name = SELF_AUTHOR_NAMES.find((n) => authors.includes(n));
  if (!name) {
    return authors;
  }
  const [before, ...rest] = authors.split(name);
  return (
    <>
      {before}
      <strong>{name}</strong>
      {rest.join(name)}
    </>
  );
}

type PublicationEntryProps = {
  publication: Publication;
};

export function PublicationEntry({ publication }: PublicationEntryProps) {
  const { authors, year, title, venue, href, linkLabel } = publication;
  return (
    <li className="publication">
      <h3 className="publication__title">{title}</h3>
      <p className="publication__authors">
        {authorLine(authors)} ({year})
      </p>
      <p className="publication__venue">{richText(venue)}</p>
      <ExternalLink className="button-link publication__link" href={href}>
        {linkLabel}
      </ExternalLink>
    </li>
  );
}
