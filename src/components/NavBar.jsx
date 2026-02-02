import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Quotes</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quotes">Quotes</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </nav>
  );
}