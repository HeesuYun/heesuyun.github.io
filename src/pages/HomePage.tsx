import { AboutHomeBand } from "../components/about/AboutHomeBand";
import { ContactDetails } from "../components/contact/ContactDetails";
import { CvDownloadPanel } from "../components/cv/CvDownloadPanel";
import { PageMain } from "../components/PageMain";
import { PublicationsHighlights } from "../components/publications/PublicationsHighlights";
import { ResearchThemes } from "../components/research/ResearchThemes";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useHashScroll } from "../hooks/useHashScroll";

export function HomePage() {
  useDocumentTitle("Heesu Yun");
  useHashScroll();

  return (
    <PageMain>
      <h1 className="visually-hidden">Heesu Yun</h1>
      <AboutHomeBand />
      <ResearchThemes />
      <PublicationsHighlights />
      <CvDownloadPanel />
      <ContactDetails />
    </PageMain>
  );
}
