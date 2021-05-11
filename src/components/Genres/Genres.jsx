import axios from "axios";
import React, { useEffect } from "react";
import { Chip } from "@material-ui/core";
const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const addGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((gnr) => gnr.id !== genre.id));
    setPage(1);
  };

  const removeGenre = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const getGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    getGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => removeGenre(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => addGenre(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
