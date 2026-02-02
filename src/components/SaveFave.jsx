export function saveFavorite(quote) {
  if (!quote) return;

  const saved = JSON.parse(localStorage.getItem("favorites")) || [];

  const exists = saved.some(
    (item) => item.content === quote.content
  );

  if (exists) {
    return;
  }

  saved.push(quote);
  localStorage.setItem("favorites", JSON.stringify(saved));
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function removeFavorite(index) {
  const saved = JSON.parse(localStorage.getItem("favorites")) || [];
  saved.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(saved));
}