import { Outlet } from "react-router-dom";
import { useScrollOnNavigate } from "../hooks/useScrollOnNavigate";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  useScrollOnNavigate();

  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="site-shell__body">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}
