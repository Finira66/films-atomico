import Layout from "@/components/layout/Layout";
import { FC } from "react";
import { ISeriesData } from "@/interfaces/series.interface";
import SeriesCard from "@/components/series-card/SeriesCard";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import { IBreadcrumbs } from "@/interfaces/breadcrumbs.interface";
import SeriesList from "@/components/series-list/SeriesList";

const Series: FC<ISeriesData> = ({ series }) => {
  const breadcrumbs: IBreadcrumbs[] = [
    {
      href: "/",
      name: "Главная",
    },
    {
      href: "/series",
      name: "Сериалы",
    },
  ];

  return (
    <Layout>
      <div className="container container--py">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <div className="title series-title">Сериалы онлайн</div>

        <div className="text series-text">
          Лучшие сериалы в HD качестве. Смотрите любимые сериалы онлайн без
          рекламы на Амедиатеке. Оформите подписку на сайте или в приложении
          Амедиатеки и смотрите сериалы онлайн в день премьеры.
        </div>

        {/*<div>фильтры</div>*/}

        <SeriesList>
          {series.length ? (
            series.map((item) => <SeriesCard key={item.id} series={item} />)
          ) : (
            <div>Series not found!</div>
          )}
        </SeriesList>
      </div>
    </Layout>
  );
};

export default Series;
