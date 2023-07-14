import { FC, useEffect, useState } from "react";
import styles from "./MovieFilters.module.scss";
import DropdownSelect from "@/components/ui/dropdown-select/DropdownSelect";
import { MoviesService } from "@/services/movies.service";
import {useRouter} from "next/router";

const MovieFilters: FC = () => {
  const router = useRouter();
  const { genre } = router.query;

  const [dropdownList, setDropdownList] = useState<string[]>([]);
  const [isDropdownListOpen, setIsDropdownListOpen] = useState<boolean>(false);
  const defaultGenreLabel = "All genres";
  const [labelGenre, setLabelGenre] = useState(defaultGenreLabel);

  useEffect(() => {
    if (genre) {
      setLabelGenre(genre);
    }
  }, [genre])

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await MoviesService.getAllGenres();
      setDropdownList(results);
    };
    fetchData();
  }, []);

  function onToggleFiltersList() {
    setIsDropdownListOpen(!isDropdownListOpen);
  }

  function onSelectButton(item: string) {
    setIsDropdownListOpen(false);
    item ? setLabelGenre(item) : setLabelGenre(defaultGenreLabel);
  }

  function resetFilter(e: Event) {
    e.stopPropagation();
    setIsDropdownListOpen(false);
    setLabelGenre(defaultGenreLabel);
  }

  return (
    <div className={styles.filters}>
      <DropdownSelect
        label={labelGenre}
        list={dropdownList}
        onToggleDropdownList={onToggleFiltersList}
        isResetVisible={genre === labelGenre}
        resetFilter={resetFilter}
        isDropdownVisible={isDropdownListOpen}
        defaultTitle={defaultGenreLabel}
        onSelect={onSelectButton}
      />
    </div>
  );
};

export default MovieFilters;
