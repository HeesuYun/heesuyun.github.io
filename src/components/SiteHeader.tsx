import { NavLink } from "react-router-dom";
import { siteTitleClass } from "../utils/navLinkClass";
import { PrimaryNav } from "./PrimaryNav";
import { SkipLink } from "./SkipLink";

export function SiteHeader() {
  return (
    <>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className={siteTitleClass} to="/" end>
            Heesu Yun
          </NavLink>
          <PrimaryNav />
        </div>
      </header>
    </>
  );
}
