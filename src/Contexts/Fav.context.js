import { createContext, useState } from "react";

export const FavContext = createContext({
  fav: [],
  setFav: () => {},
});

export const FavProvider = (props) => {
  const [fav, setFav] = useState([]);
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
