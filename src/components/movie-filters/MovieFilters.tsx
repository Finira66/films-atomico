import { FC, useEffect, useState } from "react";
import styles from "./MovieFilters.module.scss";
import DropdownSelect from "@/components/ui/dropdown-select/DropdownSelect";

interface IMovieFiltersProps {
  genres: string[];
  setSelectedGenre?: (item: string | null) => void;
  selectedGenre: string;
}

const MovieFilters: FC<IMovieFiltersProps> = ({
  genres,
  setSelectedGenre,
  selectedGenre,
}) => {
  const defaultGenreLabel = "All genres";
  const [dropdownList, setDropdownList] = useState<string[]>([]);
  const [isDropdownListOpen, setIsDropdownListOpen] = useState<boolean>(false);
  const [labelGenre, setLabelGenre] = useState(defaultGenreLabel);

  useEffect(() => {
    setDropdownList(genres);
  });

  function onToggleFiltersList() {
    setIsDropdownListOpen(!isDropdownListOpen);
  }

  function onSelectButton(item: string) {
    setSelectedGenre(item);
    item ? setLabelGenre(item) : setLabelGenre(defaultGenreLabel);
    setIsDropdownListOpen(false);
  }

  function resetFilter(e: Event) {
    e.stopPropagation();
    setSelectedGenre(null);
    setLabelGenre(defaultGenreLabel);
    setIsDropdownListOpen(false);
  }

  return (
    <div className={styles.filters}>
      <DropdownSelect
        label={labelGenre}
        list={dropdownList}
        onToggleDropdownList={onToggleFiltersList}
        isResetVisible={!!selectedGenre}
        resetFilter={resetFilter}
        isDropdownVisible={isDropdownListOpen}
        defaultTitle={defaultGenreLabel}
        onSelect={onSelectButton}
      />
    </div>
  );
};

export default MovieFilters;
