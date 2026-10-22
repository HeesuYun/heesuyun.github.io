import { Link } from "react-router-dom";
import { PrimaryNav } from "./PrimaryNav";
import { SkipLink } from "./SkipLink";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-title" to="/">
            Heesu Yun
          </Link>
          <div className="site-header__end">
            <PrimaryNav />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
