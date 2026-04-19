import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { ContactPage } from "./pages/ContactPage";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cv" element={<CvPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
