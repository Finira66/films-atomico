import Movies from "@/components/screens/movies/Movies";
import { NextPage } from "next";
import { IMoviesData } from "@/interfaces/movies.interface";
import { useCallback, useRef, useState } from "react";
import useMovies from "@/components/hooks/useMovies";

const MoviesPage: NextPage<IMoviesData> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { movies, loading } = useMovies(pageNumber, selectedGenre);

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const observer = useRef();

  function onIntersection(entries) {
    if (entries[0].isIntersecting) {
      setPageNumber((prev) => prev + 1);
    }
  }

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        onIntersection,
        observerOptions
      );

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <Movies
      movies={movies}
      ref={lastMovieElementRef}
      selectedGenre={selectedGenre}
      setSelectedGenre={setSelectedGenre}
    />
  );
};

export default MoviesPage;
