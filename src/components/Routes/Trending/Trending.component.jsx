import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Trending.style.css";

import ContentPage from "../../ContentPage/ContentPage.component";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`
    );
    console.log(data);
    if (data) setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <>
      <ContentPage content={content} pageTitle="Trending" setPage={setPage} />
    </>
  );
}

export default Trending;

{
  /* <h2 className="page__title">Trending</h2>
      <div className="content__container">
        {content &&
          content.map((content) => (
            <ContentCard
              key={content.id}
              id={content.id}
              poster={content.poster_path}
              type={content.media_type}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              vote={content.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} /> */
}
