interface IMovieGenre {
  id: string;
  text: string;
}
export interface IMovie {
  id: string;
  titleText: {
    text: string;
  };
  primaryImage: {
    url: string;
  };
  releaseYear: {
    year: number;
  };
  plot: {
    plotText: {
      plainText: string;
    };
  };
  trailer: string;
  ratingsSummary: {
    aggregateRating: number;
  };
  genres: {
    genres: IMovieGenre[]
  }
}

export interface IMoviesData {
  movies: IMovie[];
}

export interface IMovieDataSingle {
  movie: IMovie;
}

export interface IMoviesDataFull {
  entries: number;
  next: string;
  page: number;
  results: IMovie[];
}
