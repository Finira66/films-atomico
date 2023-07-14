import { useEffect, useRef, useState } from "react";
import { MoviesService } from "@/services/movies.service";
import { IMoviesDataFull } from "@/interfaces/movies.interface";
import { useRouter } from "next/router";

export default function useMovies(pageNumber, setPageNumber, isFetching, setIsFetching) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const router = useRouter();
  const { genre } = router.query;


  useEffect(() => {
    setMovies([]);
    setPageNumber(1);
    setIsFetching(true);
  }, [genre]);

  useEffect(() => {

    if (isFetching && router.isReady) {
      const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
          const { results }: IMoviesDataFull = await MoviesService.getAllMovies(
            pageNumber,
            genre
          );
          setMovies(movies => [...movies, ...results]);
          setPageNumber(prevPage => prevPage + 1);
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
          setIsFetching(false)
        }
      };
      fetchData();
    }
  }, [isFetching, genre]);

  return {
    movies,
    error,
    loading,
  };
}
