import Image from "next/image";
import styles from './MovieInfo.module.scss'
import Button from '@/components/ui/button/Button';
import {FC} from 'react';
import {ISeriesDataSingle} from '@/interfaces/series.interface';

const MovieInfo: FC<ISeriesDataSingle> = ({ series }) => {
  return (
    <div className={styles.block}>
      <Image
        src={series.primaryImage.url}
        alt="preview"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.preview}
      />

      <div className={styles.content}>
        <div className={styles.name}>
          { series.titleText.text }
        </div>
        <div>
          Seasons: 1 2
        </div>
        <div className={styles.buttons}>
          <Button>
            Смотреть
          </Button>
          <Button>
            В избранное
          </Button>
          <Button>
            like
          </Button>
          <Button>
            dislike
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
