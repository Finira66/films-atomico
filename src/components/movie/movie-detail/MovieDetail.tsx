import styles from "./MovieDetail.module.scss";
import { ISeriesDataSingle } from "@/interfaces/series.interface";
import { FC } from "react";

const MovieDetail: FC<ISeriesDataSingle> = ({ series }) => {
  return (
    <div className={styles.content}>
      <div className={styles.description}>
        {series.plot.plotText.plainText}
      </div>
      <div className={styles.info}>
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
  );
};

export default MovieDetail;
