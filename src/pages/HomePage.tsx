import { AboutHomeBand } from "../components/about/AboutHomeBand";
import { PageMain } from "../components/PageMain";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function HomePage() {
  useDocumentTitle("Heesu Yun — About");

  return (
    <PageMain>
      <AboutHomeBand />
    </PageMain>
  );
}
