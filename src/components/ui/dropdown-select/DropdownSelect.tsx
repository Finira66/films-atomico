import React, { FC } from "react";
import styles from "@/components/ui/dropdown-select/DropdownSelect.module.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";

interface IDropdownSelectProps {
  label: string;
  list: string[];
  onToggleDropdownList: () => void;
  isResetVisible: boolean;
  resetFilter: (e: Event) => void;
  isDropdownVisible: boolean;
  defaultTitle: string;
  onSelect: (item: string) => void;
}

const DropdownSelect: FC<IDropdownSelectProps> = ({
  label,
  list,
  onToggleDropdownList,
  isResetVisible,
  resetFilter,
  isDropdownVisible,
  defaultTitle,
  onSelect,
}) => {
  return (
    <>
      <div className={styles["filter-select"]} onClick={onToggleDropdownList}>
        {label}
        <ReactSVG
          src="/icons/arrow-down-s-line.svg"
          className={`${styles.chevron} ${
            isDropdownVisible ? styles.open : ""
          }`}
        />
        {isResetVisible && (
          <Link href="/movies">
            <ReactSVG
                src="/icons/close-line.svg"
                className={styles.remove}
                onClick={(e) => resetFilter(e)}
            />
          </Link>
        )}
      </div>

      <div
        className={`${styles.choices} ${
          isDropdownVisible ? styles.visible : ""
        }`}
      >
        {list.map((item) => {
          if (item) {
            return (
              <Link
                href={{
                  pathname: "/movies",
                  query: {
                    genre: item,
                  },
                }}
                key={item}
                className={styles.link}
                onClick={() => onSelect(item)}
              >
                {item}
              </Link>
            );
          } else {
            return (
              <Link
                href={{
                  pathname: "/movies",
                }}
                key={item}
                className={styles.link}
                onClick={() => onSelect(item)}
              >
                {defaultTitle}
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default DropdownSelect;
