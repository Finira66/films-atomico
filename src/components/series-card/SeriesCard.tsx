import Image from "next/image";
import { FC } from "react";
import { ISeriesDataSingle } from "@/interfaces/series.interface";
import styles from "./SeriesCard.module.scss";
import Link from "next/link";

const SeriesCard: FC<ISeriesDataSingle> = ({ series }) => {
  return (
    <Link href={"/movie/" + series.id} className={styles.card}>
      <Image
        src={series.primaryImage.url}
        alt="preview"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.name}>{series.titleText.text}</div>
      <div className={styles.year}>{series.releaseYear.year}</div>
    </Link>
  );
};

export default SeriesCard;
