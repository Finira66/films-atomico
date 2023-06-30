import Image from "next/image";
import {FC, ForwardedRef, forwardRef} from "react";
import {IMovie} from "@/interfaces/movies.interface";
import styles from "./MovieCard.module.scss";
import Link from "next/link";

interface IMovieCardProps {
  movie: IMovie,
  ref?: ForwardedRef<HTMLAnchorElement>
}

const MovieCard: FC<IMovieCardProps> = forwardRef(({ movie }, ref) => {
  return (
    <Link href={"/movie/" + movie.id} className={styles.card} ref={ref}>
      <Image
        src={movie.primaryImage.url}
        alt="preview"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.name}>{movie.titleText.text}</div>
      <div className={styles.year}>{movie.releaseYear.year}</div>
    </Link>
  );
});
MovieCard.displayName = "MovieCard"

export default MovieCard;
