import Series from "@/components/screens/series/Series";
import { GetStaticProps, NextPage } from "next";
import { SeriesService } from "@/services/series.service";
import { ISeries, ISeriesData } from "@/interfaces/series.interface";

const SeriesPage: NextPage<ISeriesData> = ({ series }) => {
  return <Series series={series} />;
};

export const getStaticProps: GetStaticProps<ISeriesData> = async () => {
  const series: { results: ISeries[] } = await SeriesService.getAllSeries();

  return {
    props: {
      series: series.results,
    },
  };
};

export default SeriesPage;
