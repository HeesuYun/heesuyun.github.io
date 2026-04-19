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
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);
}
