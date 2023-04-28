import React, { useContext, useState, useEffect } from "react";
import { FavContext } from "../../../Contexts/Fav.context";
import ContentPage from "../../ContentPage/ContentPage.component";

export default function Favorite() {
  const { fav } = useContext(FavContext);
  const [content, setContent] = useState(fav);
  const [page, setPage] = useState(1);

  const [numOfPages, setNumOfPages] = useState(1);
  useEffect(() => {
    const nPages = Math.ceil(fav.length / 10);
    if (!nPages) return;
    setNumOfPages(nPages);
    const updatedContent = fav.slice(page * 10 - 10, page * 10);
    setContent(updatedContent);

    //30 1-10,2-20,3-30 slice(page*10-10,10)
  }, [fav, page]);

  return (
    <>
      <ContentPage
        content={content}
        pageTitle="FAVORITES 💛"
        setPage={setPage}
        numberOfPages={numOfPages}
      />
      {content.length === 0 && (
        <h4 className="search__noresults"> NO FAVORITES FOUND </h4>
      )}
    </>
  );
}
