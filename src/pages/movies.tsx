import Movies from "@/components/screens/movies/Movies";
import { NextPage } from "next";
import { IMoviesData } from "@/interfaces/movies.interface";
import { useEffect, useState } from "react";
import useMovies from "@/components/hooks/useMovies";

const MoviesPage: NextPage<IMoviesData> = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetching, setFetching] = useState(true);

  const { movies, loading } = useMovies(
    pageNumber,
    setPageNumber,
    fetching,
    setFetching
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  return <Movies movies={movies} />;
};

export default MoviesPage;
