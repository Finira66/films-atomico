import styles from "@/components/movie-filters/MovieFilters.module.scss";
import Link from "next/link";

const FiltersList = ({ list }) => {
  return (
    <div className={styles.choices}>
      {list.map((item) => (
        <Link key={item} href="" className={styles.link}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default FiltersList;
