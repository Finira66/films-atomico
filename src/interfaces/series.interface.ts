export interface ISeries {
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
      plainText: string
    }
  }
}

export interface ISeriesData {
  series: ISeries[];
}

export interface ISeriesDataSingle {
  series: ISeries;
}

export interface ISeriesDataFull {
  entries: number;
  next: string;
  page: number;
  results: ISeries[];
}