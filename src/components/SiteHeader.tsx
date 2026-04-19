import { PrimaryNav } from "./PrimaryNav";
import { SkipLink } from "./SkipLink";

export function SiteHeader() {
  return (
    <>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-title" href="#about">
            Heesu Yun
          </a>
          <PrimaryNav />
        </div>
      </header>
    </>
  );
}
