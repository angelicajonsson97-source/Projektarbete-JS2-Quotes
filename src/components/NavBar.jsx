import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Quotes</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Quotes">Quotes</NavLink>
        <NavLink to="/Favorites">Favorites</NavLink>
      </div>
    </nav>
  );
}
