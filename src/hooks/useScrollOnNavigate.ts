import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On a page change, start at the top; with a hash, scroll to that section
 * (its `scroll-margin-top` clears the sticky header).
 */
export function useScrollOnNavigate() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const id = hash.startsWith("#") ? decodeURIComponent(hash.slice(1)) : "";
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);
}
