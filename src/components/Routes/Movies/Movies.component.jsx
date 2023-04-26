import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentPage from "../../ContentPage/ContentPage.component";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(10);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    // &with_genres=${genreforURL}
    const { data } = await axios.get(
      `
      https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    console.log(data);
    if (data) setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);
  return (
    <>
      <ContentPage
        content={content}
        pageTitle="Movies"
        setPage={setPage}
        numberOfPages={numOfPages}
        setNumOfPages={setNumOfPages}
        gen={true}
        genres={genres}
        setGenres={setGenres}
      />
    </>
  );
}

export default Movies;
