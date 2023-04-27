import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../Pagination/Pagination.component";
import ContentPage from "../../ContentPage/ContentPage.component";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, createTheme, Tabs, ThemeProvider } from "@mui/material";
import "./Search.styles.css";

import Tab from "@mui/material/Tab";

//function tab
function LabTabs({ type, setType }) {
  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "white" }}>
      <Tabs value={type} onChange={handleChange} centered>
        <Tab label="Movies" />
        <Tab label="TV SERIES" />
      </Tabs>
    </Box>
  );
}

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState(0);
  const [numOfPages, setNumOfPages] = useState(10);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  async function fetchSearch() {
    if (searchValue == "") return;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&language=en-US&query=${searchValue}&page=${page}&include_adult=false`
    );
    if (data) setContent(data.results);
    console.log(data);
    setNumOfPages(data.total_pages);
  }

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#0066ff",
      },
    },
  });

  useEffect(() => {
    fetchSearch();
    window.scroll(0, 0);
  }, [page, type]);

  return (
    <>
      <div className="searchbox__container">
        <TextField
          fullWidth
          id="filled-basic"
          label={`Search`}
          variant="filled"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          value={searchValue}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              fetchSearch();
            }
          }}
          margin="normal"
          sx={{
            "& .MuiInputLabel-root": {
              color: "grey",
            },
          }}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{ margin: "0.8rem" }}
          onClick={() => fetchSearch()}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
      <ThemeProvider theme={darkTheme}>
        <LabTabs type={type} setType={setType} />
      </ThemeProvider>

      {(content.length > 0 && (
        <ContentPage
          content={content}
          pageTitle={type ? "TV" : "Movies"}
          setPage={setPage}
          numberOfPages={numOfPages}
          setNumOfPages={setNumOfPages}
          gen={false}
        />
      )) || (
        <h4 className="search__noresults">
          {" "}
          {`NO ${type ? "TV SERIES" : "MOVIES"} found `}
        </h4>
      )}
    </>
  );
}

export default SearchPage;
