import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <span onClick={() => window.scroll(0, 0)}> 🎥 Filmy Feast 🎬 </span>
    </div>
  );
}

export default Header;
