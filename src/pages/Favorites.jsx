import { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../components/SaveFave";
import "../styles/Favorites.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    function loadFavorites() {
      const saved = getFavorites();
      setFavorites(saved);
    }

    loadFavorites();
  }, []);

  function handleRemove(index) {
    removeFavorite(index);
    setFavorites(getFavorites());
  }

  return (
    <div className="favorites-page">
      <h1>Mina favoriter</h1>

      {favorites.length === 0 && (
        <p>Du har inga sparade citat ännu.</p>
      )}

      <div className="favorites-list">
        {favorites.map((q, index) => (
          <div key={index} className="favorite-item">
            <p className="quote">"{q.content}"</p>
            <p className="author">– {q.author}</p>

            <button
              className="delete-btn"
              onClick={() => handleRemove(index)}
            >
              Ta bort
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}