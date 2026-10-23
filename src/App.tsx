import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { PublicationsPage } from "./pages/PublicationsPage";

/** Section hashes from the old single-page site, mapped to their new pages. */
const LEGACY_HASHES: Record<string, string> = {
  "#research": "/",
  "#publications": "/publications",
  "#peer-reviewed": "/publications#peer-reviewed",
  "#under-review": "/publications#under-review",
  "#proceedings": "/publications#proceedings",
};

function HomeRoute() {
  const { hash } = useLocation();
  const target = LEGACY_HASHES[hash];
  return target ? <Navigate replace to={target} /> : <HomePage />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomeRoute />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
