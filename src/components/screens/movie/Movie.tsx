import Layout from "@/components/layout/Layout";
import MovieInfo from "@/components/movie/movie-info/MovieInfo";
import MovieDetail from "@/components/movie/movie-detail/MovieDetail";
import EpisodeItem from "@/components/movie/episode-item/EpisodeItem";
import { NextPage } from "next";
import { ISeriesDataSingle } from "@/interfaces/series.interface";

const Movie: NextPage<ISeriesDataSingle> = ({ series }) => {
  return (
    <Layout>
      <MovieInfo series={series} />
      <MovieDetail series={series} />
      <div className="container">
        <EpisodeItem />
      </div>
    </Layout>
  );
};

export default Movie;
