import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light brand-surface border-bottom shadow-sm fixed-top">
        <div className="container">
          <ul className="navbar-nav flex-row gap-2">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                style={({ isActive }) => (isActive ? { pointerEvents: "none" } : undefined)}
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${
                    isActive
                      ? "active bg-secondary-subtle text-dark cursor-not-allowed"
                      : "text-secondary"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/education"
                style={({ isActive }) => (isActive ? { pointerEvents: "none" } : undefined)}
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${
                    isActive
                      ? "active bg-secondary-subtle text-dark cursor-not-allowed"
                      : "text-secondary"
                  }`
                }
              >
                Education
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/experience"
                style={({ isActive }) => (isActive ? { pointerEvents: "none" } : undefined)}
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${
                    isActive
                      ? "active bg-secondary-subtle text-dark cursor-not-allowed"
                      : "text-secondary"
                  }`
                }
              >
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? { pointerEvents: "none" } : undefined)}
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${
                    isActive
                      ? "active bg-secondary-subtle text-dark cursor-not-allowed"
                      : "text-secondary"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? { pointerEvents: "none" } : undefined)}
                className={({ isActive }) =>
                  `nav-link px-3 rounded ${
                    isActive
                      ? "active bg-secondary-subtle text-dark cursor-not-allowed"
                      : "text-secondary"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}