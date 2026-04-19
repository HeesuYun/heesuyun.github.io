import { AboutHomeBand } from "../components/about/AboutHomeBand";
import { AwardsSection } from "../components/cv/AwardsSection";
import { ContactDetails } from "../components/contact/ContactDetails";
import { CvDownloadPanel } from "../components/cv/CvDownloadPanel";
import { EducationSection } from "../components/cv/EducationSection";
import { InvitedTalksSection } from "../components/cv/InvitedTalksSection";
import { MentoringSection } from "../components/cv/MentoringSection";
import { OtherProfessionalSection } from "../components/cv/OtherProfessionalSection";
import { ScholarlyWorkSection } from "../components/cv/ScholarlyWorkSection";
import { PageMain } from "../components/PageMain";
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
      <EducationSection />
      <AwardsSection />
      <ScholarlyWorkSection />
      <InvitedTalksSection />
      <OtherProfessionalSection />
      <MentoringSection />
      <CvDownloadPanel />
      <ContactDetails />
    </PageMain>
  );
}
