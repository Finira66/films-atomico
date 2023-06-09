import styles from "./SeriesList.module.scss";
import { FC, PropsWithChildren } from "react";

const SeriesList: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default SeriesList;
