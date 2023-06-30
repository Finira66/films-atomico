import Movies from "@/components/screens/movies/Movies";
import {NextPage} from "next";
import {IMoviesData} from "@/interfaces/movies.interface";
import {useCallback, useRef, useState} from "react";
import useMovies from "@/components/hooks/useMovies";

const MoviesPage: NextPage<IMoviesData> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {movies, loading} = useMovies(pageNumber);
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  function onIntersection(entries) {
    if (entries[0].isIntersecting) {
      setPageNumber((prev) => prev + 1);
    }
  }

  const observer = useRef();
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

  return <Movies movies={movies} ref={lastMovieElementRef}/>;
};

export default MoviesPage;
