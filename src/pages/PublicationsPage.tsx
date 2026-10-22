import { PageMain } from "../components/PageMain";
import { PublicationEntry } from "../components/publications/PublicationEntry";
import { PUBLICATION_GROUPS } from "../data/publications";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { stagger } from "../utils/stagger";

export function PublicationsPage() {
  useDocumentTitle("Publications · Heesu Yun");

  return (
    <PageMain>
      <div className="page-with-toc">
        <nav aria-label="On this page" className="toc">
          <p className="toc__heading">On this page</p>
          <ul>
            {PUBLICATION_GROUPS.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`}>{group.heading}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="page-with-toc__body">
          <h1 className="page-title rise" style={stagger(0)}>
            Publications
          </h1>
          {PUBLICATION_GROUPS.map((group, i) => (
            <section
              aria-labelledby={`${group.id}-heading`}
              className="publication-group rise"
              id={group.id}
              key={group.id}
              style={stagger(i + 1)}
            >
              <h2 className="section-heading" id={`${group.id}-heading`}>
                {group.heading}
              </h2>
              <ul className="publication-list">
                {group.items.map((publication) => (
                  <PublicationEntry
                    key={publication.title}
                    publication={publication}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PageMain>
  );
}
