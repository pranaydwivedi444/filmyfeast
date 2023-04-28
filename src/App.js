import { Container } from "@mui/system";

import "./App.css";
import Header from "./components/Header/Header.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";

import Trending from "./components/Routes/Trending/Trending.component";

import Movies from "./components/Routes/Movies/Movies.component";
import TvSeries from "./components/Routes/TvSeries/TvSeries.component";
import Favorite from "./components/Routes/Favorite/Favorite.component";
import SearchPage from "./components/Routes/Search/Search.component";
import { FavContext, FavProvider } from "./Contexts/Fav.context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <FavProvider>
          <div className="app">
            <Container>
              <Routes>
                <Route path="/" Component={Trending} />
                <Route path="/movies" Component={Movies} />
                <Route path="/tvseries" Component={TvSeries} />
                <Route path="/favorites" Component={Favorite} />
                <Route path="/search" Component={SearchPage} />
              </Routes>
            </Container>
          </div>
        </FavProvider>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
