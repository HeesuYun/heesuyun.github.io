import type { ReactNode } from "react";

type SkipLinkProps = {
  href: string;
  children: ReactNode;
};

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a className="skip-link" href={href}>
      {children}
    </a>
  );
}
