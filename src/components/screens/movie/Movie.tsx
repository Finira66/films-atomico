import Layout from "@/components/layout/Layout";
import MovieInfo from "@/components/movie/movie-info/MovieInfo";
import MovieDetail from "@/components/movie/movie-detail/MovieDetail";
import { NextPage } from "next";
import { IMovie } from "@/interfaces/movies.interface";
import RecommendationSlider from "@/components/recommendation-slider/RecommendationSlider";

interface IMovieProps {
  movie: IMovie;
  randomTitles: IMovie[];
}

const Movie: NextPage<IMovieProps> = ({ movie, randomTitles }) => {
  return (
    <Layout>
      <MovieInfo movie={movie} />
      <MovieDetail movie={movie} />

      {/*<div className="container">
        <EpisodeItem />
      </div>*/}

      <RecommendationSlider title="Вам понравится" items={randomTitles} />
    </Layout>
  );
};

export default Movie;
