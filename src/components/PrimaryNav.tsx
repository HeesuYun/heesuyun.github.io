import { NavLink } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "is-active" : undefined;

export function PrimaryNav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <ul>
        <li>
          <NavLink className={navClass} end to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={navClass} to="/publications">
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink className={navClass} to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
