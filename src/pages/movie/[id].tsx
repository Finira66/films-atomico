import Movie from "@/components/screens/movie/Movie";
import { GetStaticProps, NextPage } from "next";
import { SeriesService } from "@/services/series.service";
import { ISeries, ISeriesDataFull } from "@/interfaces/series.interface";

const MoviePage: NextPage = ({ series }) => {
  return <Movie series={series} />;
};

export default MoviePage;

export const getStaticPaths = async () => {
  const series: ISeriesDataFull = await SeriesService.getAllSeries();
  const paths = series.results.map((series) => {
    return {
      params: {
        id: series.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const series = await SeriesService.getSeriesById(params.id);

  return {
    props: { series: series.results },
  };
};
