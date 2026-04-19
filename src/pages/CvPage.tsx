import { CvDownloadPanel } from "../components/cv/CvDownloadPanel";
import { PageMain } from "../components/PageMain";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function CvPage() {
  useDocumentTitle("Heesu Yun — CV");

  return (
    <PageMain>
      <CvDownloadPanel />
    </PageMain>
  );
}
