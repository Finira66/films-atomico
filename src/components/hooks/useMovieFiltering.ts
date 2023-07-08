import { useEffect, useState } from "react";
import { MoviesService } from "@/services/movies.service";

export default function useMovieFiltering() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await MoviesService.getAllGenres();
      setGenres(results);
    };
    fetchData();
  }, []);

  return {
    genres,
  };
}
