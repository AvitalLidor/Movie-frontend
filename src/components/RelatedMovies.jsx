import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getRelatedMovies } from "../api/movie";
import { useNotification } from "../hooks";
import MovieList from "./user/MovieList";

export default function RelatedMovies({ movieId }) {
  const [movies, setMovies] = useState([]);
  const { updateNotification } = useNotification();

  const fetchRelatedMovies = async () => {
    const { error, movies } = await getRelatedMovies(movieId);
    if (error) updateNotification("error", error);

    setMovies([...movies]);
  };

  useEffect(() => {
    if (movieId) fetchRelatedMovies();
  }, [movieId]);

  return <MovieList title="Related Movies" movies={movies} />;
}