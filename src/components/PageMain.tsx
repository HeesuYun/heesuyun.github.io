import type { ReactNode } from "react";

type PageMainProps = {
  children: ReactNode;
};

export function PageMain({ children }: PageMainProps) {
  return (
    <main className="site-main" id="main-content" tabIndex={-1}>
      {children}
    </main>
  );
}
