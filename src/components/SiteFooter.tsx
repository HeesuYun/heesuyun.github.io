const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="muted">&copy; {year} Heesu Yun</p>
    </footer>
  );
}
