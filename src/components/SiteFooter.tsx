const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="muted">&copy; {year} Heesu Yun</p>
      <p className="site-footer__colophon muted">
        Built with React, TypeScript, and Vite. Hosted on GitHub Pages.
      </p>
    </footer>
  );
}
