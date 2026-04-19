import { NavLink } from "react-router-dom";
import { navLinkClass } from "../utils/navLinkClass";

export function PrimaryNav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <ul>
        <li>
          <NavLink to="/" end className={navLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={navLinkClass}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
