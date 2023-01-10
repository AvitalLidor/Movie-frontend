import React from "react";
import { useState } from "react";
import { getMovies, getMoviesForUpdate } from "../../api/movie";
import MovieListItem from "../MovieListItem";
import { useNotification } from "../../hooks";
import { useEffect } from "react";
import NextAndPrevButton from "../NextAndPrevButton";
import UpdateMovie from "../models/UpdateMovie";

const limit = 10;
let currentPageNo = 0;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [reachedToEnd, setReachedToEnd] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { updateNotification } = useNotification();

  const fetchMovies = async (pageNo) => {
    const { error, movies } = await getMovies(pageNo, limit);
    if (error) updateNotification("error", error);

    if (!movies.length) {
      currentPageNo = pageNo - 1;
      return setReachedToEnd(true);
    }

    setMovies([...movies]);
  };

  const handleOnNextClick = () => {
    if (reachedToEnd) return;
    currentPageNo += 1;
    fetchMovies(currentPageNo);
  };

  const handleOnPrevClick = () => {
    if (currentPageNo <= 0) return;
    if (reachedToEnd) setReachedToEnd(false);

    currentPageNo -= 1;
    fetchMovies(currentPageNo);
  };

  const handleOnEditClick = async ({ id }) => {
    const { movie, error } = await getMoviesForUpdate(id);
    if (error) return updateNotification("error", error);
    setSelectedMovie(movie);
    setShowUpdateModal(true);
  };

  const handleOnUpdate = (movie) => {
    const updatedMovies = movies.map((m) => {
      if (m.id === movie.id) return movie;
      return m;
    });

    setMovies([...updatedMovies]);
  };

  const hideUpdateForm = () => setShowUpdateModal(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="space-y-3 p-5">
        {movies.map((movie) => {
          return (
            <MovieListItem
              key={movie.id}
              movie={movie}
              onEditClick={() => handleOnEditClick(movie)}
            />
          );
        })}
        <NextAndPrevButton
          className="mt-5"
          onNextClick={handleOnNextClick}
          onPrevClick={handleOnPrevClick}
        />
      </div>
      <UpdateMovie
        visible={showUpdateModal}
        initialState={selectedMovie}
        onSuccess={handleOnUpdate}
        onClose={hideUpdateForm}
      />
    </>
  );
}
