import type { NavLinkRenderProps } from "react-router-dom";

export function navLinkClass({ isActive }: NavLinkRenderProps) {
  return isActive ? "is-active" : undefined;
}

export function siteTitleClass({ isActive }: NavLinkRenderProps) {
  return ["site-title", isActive ? "is-active" : ""].filter(Boolean).join(" ");
}
