import { createContext, useEffect, useState } from "react";

export const FavContext = createContext({
  fav: [],
  setFav: () => {},
});

export const FavProvider = (props) => {
  const [fav, setFav] = useState([]);
  // Load favorites from local storage on mount
  useEffect(() => {
    const storedFav = localStorage.getItem("fav");
    if (storedFav) {
      setFav(JSON.parse(storedFav));
    }
  }, []);

  // Save favorites to local storage whenever the `fav` state changes
  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);
  function addFavorites(newFav) {
    setFav((fav) => [...fav, newFav]);
  }
  function removeFav(rFav) {
    const updatedFav = fav.filter((f) => f.id !== rFav.id);
    setFav(updatedFav);
  }
  const value = {
    fav,
    addFavorites,
    removeFav,
  };
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  );
};
