import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import Modal from "../UI/Modal/Modal.component";
import "./ContentModal.styles.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ContentModal() {
  return (
    <Modal>
      <div className="ContentModal__container">
        <div className="ContentModal__poster">
          <img
            src="https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
            alt=""
            className="ContentModal__image"
          />
        </div>
        <div className="ContentModal__details">
          <h4 className="ContentModal__Heading">Peter Pan{` (DATE)`}</h4>
          <div className="ContentModal__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            veritatis aliquid doloribus quasi ex doloremque. Sunt rerum, eos
            sequi non, doloremque in possimus, consectetur nesciunt delectus
            quos molestias esse dicta.
          </div>
          <div className="ContentModal__carosel">Carosel</div>
          <div className="ContentModal__buttons">
            <Button variant="contained" startIcon={<PlayCircleIcon />}>
              Watch the Trailer
            </Button>
            <Button variant="contained" endIcon={<FavoriteIcon />}>
              Add to Favorites
            </Button>
            <Button variant="contained" color="error">
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
