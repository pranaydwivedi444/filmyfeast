import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal.component";
import "./ContentModal.styles.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { img_500, unavailable } from "../../Config/Config";
import axios from "axios";
import { FavContext } from "../../Contexts/Fav.context";

function ContentModal({ close, content, type }) {
  const {
    title,
    overview,
    release_date,

    id,
    name,
    first_air_date,
    poster_path,
  } = content;
  const { fav, addFavorites, removeFav } = useContext(FavContext);
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      console.log(response.data);
      const trailerResponse = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      //   setTrailer(trailerResponse.data.results[0]?.key);
      console.log(trailerResponse.data.results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // fetchData();
    const checkFav = fav.find((f) => f.id == content.id);
    if (!checkFav) return;
    setIsFav(true);
  }, [content]);
  //function fav Handler
  function favHandler() {
    if (isFav) {
      removeFav(content);
    } else addFavorites(content);
    setIsFav(!isFav);
  }
  //check fav
  const [isFav, setIsFav] = useState(false);
  return (
    <Modal close={close}>
      <div className="ContentModal__container">
        <div className="ContentModal__poster">
          <img
            src={poster_path ? `${img_500}/${poster_path}` : unavailable}
            alt={title}
            className="ContentModal__image"
          />
        </div>
        <div className="ContentModal__details">
          <h4 className="ContentModal__Heading">{`${title || name} (${
            release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
          })`}</h4>
          <div className="ContentModal__description">{overview}</div>
          <div className="ContentModal__carosel">{/* {Carosel} */}</div>
          <div className="ContentModal__buttons">
            <Button variant="contained" startIcon={<PlayCircleIcon />}>
              Watch the Trailer
            </Button>
            <Button
              variant="contained"
              endIcon={<FavoriteIcon />}
              onClick={favHandler}
            >
              {isFav ? `Added to Fav` : `Add to Favorites`}
            </Button>
            <Button variant="contained" color="error" onClick={close}>
              Close
            </Button>
          </div>
        </div>
      </div>
      {/* title

  poster 
  description 
  carosel
  add to fav , watch trailer
   */}
    </Modal>
  );
}

export default ContentModal;
