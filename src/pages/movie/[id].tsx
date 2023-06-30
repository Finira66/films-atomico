import Movie from "@/components/screens/movie/Movie";
import { NextPage } from "next";
import { MoviesService } from "@/services/movies.service";
import { IMovie } from "@/interfaces/movies.interface";

interface IMoviePageProps {
  movie: IMovie;
  randomTitles: IMovie[];
}

const MoviePage: NextPage<IMoviePageProps> = ({ movie, randomTitles }) => {
  return <Movie movie={movie} randomTitles={randomTitles} />;
};

export default MoviePage;

export async function getServerSideProps({ params }) {
  const movie = await MoviesService.getMovieById(params.id);
  const randomTitles = await MoviesService.getRandomTitles();

  return {
    props: {
      movie: movie.results,
      randomTitles: randomTitles.results,
    },
  };
}
