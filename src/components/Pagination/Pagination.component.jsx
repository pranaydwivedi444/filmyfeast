import { Pagination } from "@mui/material";
import React from "react";

function CustomPagination({ setPage, numberOfPages = 10 }) {
  function pageChangeHandler(page) {
    setPage(page);
    window.scroll(0, 0);
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "1.5rem",
      }}
    >
      <Pagination
        count={numberOfPages}
        onChange={(e) => pageChangeHandler(e.target.textContent)}
        color="primary"
      />
    </div>
  );
}

export default CustomPagination;
