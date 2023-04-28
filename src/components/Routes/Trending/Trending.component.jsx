import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Trending.style.css";

import ContentPage from "../../ContentPage/ContentPage.component";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(10);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`
    );
    console.log(data);
    if (data) setContent(data.results);
    // setNumOfPages(10);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <>
      <ContentPage
        content={content}
        pageTitle="Trending"
        setPage={setPage}
        numberOfPages={numOfPages}
      />
    </>
  );
}

export default Trending;
