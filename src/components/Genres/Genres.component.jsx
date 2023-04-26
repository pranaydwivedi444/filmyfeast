import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Genres({
  type,
  genres,
  setGenres,
  setPage,
  selectedGenres,
  setSelectedGenres,
}) {
  //   const [selectedGenres, setSelectedGenres] = useState([]);
  //   let dataAPI;
  console.log(type);

  function addGenreHandler(gen) {
    // const selected = [...selectedGenres, gen];
    setSelectedGenres((selected) => [...selected, gen]);
    const nonSelected = genres.filter((genre) => genre.id != gen.id);
    setGenres(nonSelected);
    setPage(1);
  }

  //remove Handler Function
  function removeGenreHandler(gen) {
    const updatedSelectGenre = selectedGenres.filter(
      (genre) => genre.id != gen.id
    );
    setSelectedGenres(updatedSelectGenre);
    // const newGenres = [...genres, gen];
    setGenres((genre) => [...genre, gen]);
    setPage(1);
  }
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
    );
    console.log(data);
    // dataAPI = data;
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
  }, []);

  return (
    <div className="Genres__container">
      {selectedGenres.map((gen) => (
        <Chip
          label={gen.name}
          key={gen.id}
          style={{
            backgroundColor: "#115CB0",
            color: "white",
            margin: "2px",
            boxShadow: "1px 1px 2px black",
          }}
          clickable
          onDelete={() => removeGenreHandler(gen)}
          // color="primary"
        />
      ))}
      {genres &&
        genres.map((gen) => (
          <Chip
            label={gen.name}
            key={gen.id}
            style={{ backgroundColor: "black", color: "white", margin: "2px" }}
            clickable
            onClick={() => addGenreHandler(gen)}
          />
        ))}
    </div>
  );
}

export default Genres;
