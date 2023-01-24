import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, setUser } = useAuthContext();

  return (
    <nav>
      <ul>
        <li>
          <strong>Menú</strong>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-class" : "")}
          >
            Home
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-class" : "")}
            >
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/menus"
              className={({ isActive }) => (isActive ? "active-class" : "")}
            >
              Menus
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
