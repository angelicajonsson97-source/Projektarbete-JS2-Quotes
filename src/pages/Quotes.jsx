import { useState, useEffect } from "react";
import "../styles/Quotes.css";
import { saveFavorite } from "../components/SaveFave";

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedMessage, setSavedMessage] = useState("");

  async function fetchQuote() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://api.adviceslip.com/advice");

      if (!res.ok) {
        throw new Error("API error");
      }

      const data = await res.json();

      setQuote({
        content: data.slip.advice,
        author: "Okänd"
      });

    } catch (error) {
      console.error("FETCH ERROR:", error);
      setError("Kunde inte hämta data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quotes-page">
      <h1>Dagens citat</h1>

      {loading && <p>Laddar...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && quote && (
        <div className="quote-box">
          <p className="quote">"{quote.content}"</p>
          <p className="author">– {quote.author}</p>
        </div>
      )}

      <button className="new-quote-btn" onClick={fetchQuote}>
        Nytt citat
      </button>


      <button
  className="save-btn"
  onClick={() => {
    saveFavorite(quote);
    setSavedMessage("Citat sparat!");
    setTimeout(() => setSavedMessage(""), 2000);
  }}
>
  Spara i favoriter
</button>
{savedMessage && <p className="saved-message">{savedMessage}</p>}
    </div>
  );
}