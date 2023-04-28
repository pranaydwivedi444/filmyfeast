import { createContext, useState } from "react";

export const FavContext = createContext({
  fav: [],
  setFav: () => {},
});

export const FavProvider = (props) => {
  const [fav, setFav] = useState([]);
  const value = {
    fav,
    setFav,
  };
  return (
    <FavContext.Provider value={value}>{props.children}</FavContext.Provider>
  );
};
