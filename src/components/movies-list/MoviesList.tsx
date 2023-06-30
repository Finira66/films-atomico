import styles from "./MoviesList.module.scss";
import { FC, PropsWithChildren } from "react";

const MoviesList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default MoviesList;
