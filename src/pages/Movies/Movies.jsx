import axios from "axios";
import React, { useState, useEffect } from "react";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hook/useGenre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Card from "../../components/Card/Card";
import PageTitle from "../SharedStyles/PageTitle";
import HorizontalDrawer from "../SharedStyles/HorizontalDrawer";
import { MoviesContainer } from "../SharedStyles/Description";
const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const getMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    getMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);
  return (
    <div>
      <PageTitle>
        <HorizontalDrawer /> Discover Movies
        <HorizontalDrawer />
      </PageTitle>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <MoviesContainer>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </MoviesContainer>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
