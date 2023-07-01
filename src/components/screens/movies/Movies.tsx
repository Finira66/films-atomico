import Layout from "@/components/layout/Layout";
import { FC, ForwardedRef, forwardRef, useEffect, useState } from "react";
import { IMovie } from "@/interfaces/movies.interface";
import MovieCard from "@/components/movie-card/MovieCard";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import { IBreadcrumbs } from "@/interfaces/breadcrumbs.interface";
import MoviesList from "@/components/movies-list/MoviesList";
import styles from "./Movies.module.scss";
import MovieFilters from "@/components/movie-filters/MovieFilters";
import { MoviesService } from "@/services/movies.service";

interface IMoviesProps {
  movies: IMovie[];
  ref?: ForwardedRef<HTMLAnchorElement>;
}

const Movies: FC<IMoviesProps> = forwardRef(({ movies }, ref) => {
  const breadcrumbs: IBreadcrumbs[] = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: "/movies",
      name: "Фильмы",
    },
  ];

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchAllMoviesGenres = async () => {
      const { results } = await MoviesService.getAllGenres();
      setGenres(results);
    };
    fetchAllMoviesGenres();
  }, []);

  return (
    <Layout>
      <div className="container container--py">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <div className={`title ${styles["movies-title"]}`}>Фильмы онлайн</div>

        <div className={`text ${styles["movies-text"]}`}>
          Лучшие фильмы в HD качестве.
        </div>

        <MovieFilters
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        <MoviesList>
          {movies.length ? (
            movies.map((movie, index) => {
              if (movies.length === index + 1) {
                return <MovieCard key={movie.id} ref={ref} movie={movie} />;
              } else {
                return <MovieCard key={movie.id} movie={movie} />;
              }
            })
          ) : (
            <div>Movies not found!</div>
          )}
        </MoviesList>
      </div>
    </Layout>
  );
});
Movies.displayName = "Movies";

export default Movies;
