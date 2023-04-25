import React, { useEffect, useState } from "react";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import FavoriteIcon from "@mui/icons-material/Favorite";

import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { StyledBottomNavigation } from "./Navigation.styles";

function Navigation() {
  const [value, setValue] = useState(0);
  const history = useNavigate();
  useEffect(() => {
    switch (value) {
      case 0:
        history("/");
        break;
      case 1:
        history("/favorites");
        break;
      case 2:
        history("/movies");
        break;
      case 3:
        history("/tvseries");
        break;
      case 4:
        history("/search");
        break;

      default:
        history("/");
        break;
    }
  }, [value, history]);

  return (
    <StyledBottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Tv-Series"
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </StyledBottomNavigation>
  );
}

export default Navigation;
