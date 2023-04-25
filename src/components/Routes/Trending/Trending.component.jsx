import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Trending.style.css";
import ContentCard from "../../ContentCard/ContentCard.component";

function Trending() {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    );
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <>
      <h1 className="page__title">Trending</h1>
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
    </>
  );
}

export default Trending;
