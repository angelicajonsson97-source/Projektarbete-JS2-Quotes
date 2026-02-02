import "../styles/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Välkommen till Quote Explorer</h1>
        <p>
          Här kan du hämta inspirerande citat, upptäcka nya tankar och spara dina favoriter.
        </p>
      </section>

      <section className="home-actions">
        <h2>Kom igång</h2>

        <div className="action-buttons">
          <NavLink to="/quotes" className="home-btn">
            Hämta ett citat
          </NavLink>

          <NavLink to="/favorites" className="home-btn">
            Visa favoriter
          </NavLink>
        </div>
      </section>
    </div>
  );
}