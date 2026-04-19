import { Outlet } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
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
