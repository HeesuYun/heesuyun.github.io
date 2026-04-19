import { useLocation } from "react-router-dom";
import { sectionNavClass } from "../utils/sectionNavClass";

export function PrimaryNav() {
  const { hash, pathname } = useLocation();
  const effectiveHash = pathname === "/" ? hash : false;

  return (
    <nav className="site-nav" aria-label="Primary">
      <ul>
        <li>
          <a className={sectionNavClass(effectiveHash, "about")} href="#about">
            About
          </a>
        </li>
        <li>
          <a
            className={sectionNavClass(effectiveHash, "research")}
            href="#research"
          >
            Research
          </a>
        </li>
        <li>
          <a className={sectionNavClass(effectiveHash, "cv")} href="#cv">
            CV
          </a>
        </li>
        <li>
          <a
            className={sectionNavClass(effectiveHash, "contact")}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
