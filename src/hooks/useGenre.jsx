import React from "react";

function useGenre(selectedGenres) {
  if (selectedGenres.length < 1) return "";
  return selectedGenres.map((g) => g.id).join(",");
}

export default useGenre;
