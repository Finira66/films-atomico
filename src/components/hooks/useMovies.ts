import {useEffect, useRef, useState} from "react";
import { MoviesService } from "@/services/movies.service";
import { IMoviesDataFull } from "@/interfaces/movies.interface";

export default function useMovies(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const loadedRef = useRef(false)

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const { results, page }: IMoviesDataFull = await MoviesService.getAllMovies(pageNumber);
        setMovies((prevMovies) => {
          return [...new Set([...prevMovies, ...results])];
        });
        loadedRef.current = false;
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, [pageNumber]);

  return {
    movies,
    error,
    loading,
  };
}
