import React from "react";
import { img_300, unavailable } from "../../Config/Config.js";
import "./ContentCard.style.css";
function ContentCard(props) {
  const { id, poster, type, title, date, vote } = props;
  return (
    <div className="content__card">
      <img
        className="content__poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="content__card__title">{title}</b>
      <div className="content__sub">
        <span className="content__subtitle">
          {type === "tv" ? "Tv-Series" : "Movie"}
        </span>
        <span className="content__subtitle">{date}</span>
      </div>
    </div>
  );
}

export default ContentCard;
