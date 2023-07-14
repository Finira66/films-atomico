import Layout from "@/components/layout/Layout";
import {
  FC,
  ForwardedRef,
} from "react";
import { IMovie } from "@/interfaces/movies.interface";
import MovieCard from "@/components/movie-card/MovieCard";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import { IBreadcrumbs } from "@/interfaces/breadcrumbs.interface";
import MoviesList from "@/components/movies-list/MoviesList";
import styles from "./Movies.module.scss";
import MovieFilters from "@/components/movie-filters/MovieFilters";

interface IMoviesProps {
  movies: IMovie[];
  ref?: ForwardedRef<HTMLAnchorElement>;
}

const Movies: FC<IMoviesProps> = ({ movies }) => {
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

  return (
    <Layout>
      <div className="container container--py">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <div className={`title ${styles["movies-title"]}`}>Фильмы онлайн</div>

        <div className={`text ${styles["movies-text"]}`}>
          Лучшие фильмы в HD качестве.
        </div>

        <MovieFilters />

        <MoviesList>
          {movies.length ? (
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />
            })
          ) : (
            <div>Movies not found!</div>
          )}
        </MoviesList>
      </div>
    </Layout>
  );
};
Movies.displayName = "Movies";

export default Movies;
