import { ContactDetails } from "../components/contact/ContactDetails";
import { PageMain } from "../components/PageMain";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function ContactPage() {
  useDocumentTitle("Heesu Yun — Contact");

  return (
    <PageMain>
      <ContactDetails />
    </PageMain>
  );
}
