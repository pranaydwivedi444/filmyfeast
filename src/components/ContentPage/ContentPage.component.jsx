import React from "react";
import ContentCard from "../ContentCard/ContentCard.component";
import Genres from "../Genres/Genres.component";
import CustomPagination from "../Pagination/Pagination.component";
import "./ContentPage.styles.css";

function ContentPage({
  pageTitle,
  content,
  setPage,
  numberOfPages = 10,
  gen = false,
  genres,
  setGenres,

  selectedGenres,
  setSelectedGenres,
}) {
  return (
    <>
      <h2 className="page__title">{pageTitle}</h2>
      {gen && (
        <Genres
          type={pageTitle == "Movies" ? "movie" : "tv"}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      )}
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
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </>
  );
}

export default ContentPage;
