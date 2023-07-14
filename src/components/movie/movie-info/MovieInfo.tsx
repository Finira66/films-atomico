import Image from "next/image";
import styles from "./MovieInfo.module.scss";
import Button from "@/components/ui/button/Button";
import { FC } from "react";
import { IMovieDataSingle } from "@/interfaces/movies.interface";
import button from "@/components/ui/button/Button";
import { ReactSVG } from "react-svg";

const MovieInfo: FC<IMovieDataSingle> = ({ movie }) => {
  return (
    <div className={styles.block}>
      <Image
        src={movie.primaryImage.url}
        alt="preview"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.preview}
      />

      <div className={styles.content}>
        <div className={styles.name}>{movie.titleText.text}</div>

        {/*<div className={styles.seasons}>
          <div className={`${styles.text} ${styles["seasons-label"]}`}>
            Seasons:
          </div>

          <div className={styles["seasons-buttons"]}>
            <button className={styles["season-button"]}>1</button>
            <button className={styles["season-button"]}>2</button>
            <button className={styles["season-button"]}>3</button>
          </div>
        </div>*/}

        <div className={styles.buttons}>
          <Button className={`${styles.button} ${styles["button--red"]}`}>
            <ReactSVG
              src="/icons/play-line.svg"
              className={`${styles["button-icon"]} ${styles["button-icon--mr"]}`}
            />
            Смотреть
          </Button>
          <Button className={styles.button}>
            <ReactSVG
              src="/icons/add-circle-line.svg"
              className={`${styles["button-icon"]} ${styles["button-icon--mr"]}`}
            />
            В избранное
          </Button>
          <Button className={`${styles.button} ${styles["button--small"]}`}>
            <ReactSVG
              src="/icons/thumb-up-line.svg"
              className={styles["button-icon"]}
            />
          </Button>
          <Button className={`${styles.button} ${styles["button--small"]}`}>
            <ReactSVG
              src="/icons/thumb-down-line.svg"
              className={styles["button-icon"]}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
