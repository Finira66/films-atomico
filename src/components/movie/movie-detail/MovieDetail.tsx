import styles from "./MovieDetail.module.scss";
import { IMovieDataSingle } from "@/interfaces/movies.interface";
import { FC } from "react";
import YoutubeEmbed from "@/components/youtube-embed/YoutubeEmbed";
import { ReactSVG } from "react-svg";

const MovieDetail: FC<IMovieDataSingle> = ({ movie }) => {
  return (
    <div className={styles.content}>
      <div className={styles.trailer}>
        <div className={styles["trailer-title"]}>Трейлер</div>
        <YoutubeEmbed embedLink={movie.trailer} />
      </div>

      <div className="information">
        <div className={styles["additional-info"]}>
          <div className={`${styles["additional-info-item"]} ${styles.rating}`}>
            <ReactSVG
              src="/icons/bard-fill.svg"
              className={styles["rating-icon"]}
            />
            <div className={styles["rating-text"]}>
              {movie.ratingsSummary.aggregateRating}
            </div>
          </div>
          <div className={styles["additional-info-item"]}>
            <div className={styles["rating-text"]}>
              {movie.releaseYear.year}
            </div>
          </div>
        </div>

        <div className={styles.description}>
          {movie.plot.plotText.plainText}
        </div>
        <div className={styles.info}>
          <div className={styles.label}>Genres:</div>
          <div className={styles.genres}>
            {movie.genres.genres.map((genre) => genre.text).join(", ")}
          </div>
          <div className={styles.label}>Режиссеры:</div>
          <div>Кэри Фукунага</div>
          <div className={styles.label}>В ролях:</div>
          <div>
            Мэттью МакКонахи, Вуди Харрельсон, Хезер Эшли Бойд, Тори Киттлз
          </div>
          <div className={styles.label}>Страна:</div>
          <div>США</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
