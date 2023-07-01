import styles from "@/components/movie-filters/MovieFilters.module.scss";
import { ReactSVG } from "react-svg";

const selectFilter = ({ label }) => {
  return (
    <div className={styles["filter-select"]}>
      {label}
      <ReactSVG src="/icons/arrow-down-s-line.svg" className={styles.chevron} />
    </div>
  );
};

export default selectFilter;
