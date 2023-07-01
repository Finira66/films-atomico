import { FC, useEffect, useState } from "react";
import styles from "./MovieFilters.module.scss";
import SelectFilter from "@/components/movie-filters/select-filter/SelectFilter";
import FiltersList from "@/components/movie-filters/filters-list/FiltersList";
import { MoviesService } from "@/services/movies.service";

interface IMovieFiltersProps {
  genres: string[];
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

const MovieFilters: FC<IMovieFiltersProps> = ({
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  const [filters, setFilters] = useState([
    {
      id: 1,
      type: "genres",
      label: "All genres",
      list: [],
    },
    {
      id: 2,
      type: "countries",
      label: "All countries",
      list: [],
    },
  ]);

  const [selected, setSelected] = useState("All genres");
  const [selectedList, setSelectedList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchAllGenres() {
      const { results } = await MoviesService.getAllGenres();
      console.log(results);
    }

    fetchAllGenres();
  }, []);

  return (
    <div className={styles.filters}>
      <div className={styles.options}>
        {filters.map((filter) => (
          <SelectFilter key={filter.id} label={filter.label} />
        ))}
      </div>

      <FiltersList list={selectedList} />
    </div>
  );
};

export default MovieFilters;
