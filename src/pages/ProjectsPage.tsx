import { PageMain } from "../components/PageMain";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { stagger } from "../utils/stagger";

export function ProjectsPage() {
  useDocumentTitle("Projects · Heesu Yun");

  return (
    <PageMain>
      <h1 className="page-title rise" style={stagger(0)}>
        Projects
      </h1>
    </PageMain>
  );
}
