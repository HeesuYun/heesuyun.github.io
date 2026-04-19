import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const id = hash.startsWith("#") ? hash.slice(1) : "";
    if (!id) {
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) {
        return;
      }
      const header = document.querySelector(".site-header");
      const headerHeight =
        header instanceof HTMLElement
          ? Math.round(header.getBoundingClientRect().height)
          : 0;
      const gapPx = 10;
      const y =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - gapPx;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);
}
