import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.common["X-RapidAPI-Key"] =
  "5778b407d1msh5fb4e2c14e426f1p1db492jsn422fc04966b2";
axios.defaults.headers.common["X-RapidAPI-Host"] =
  "moviesdatabase.p.rapidapi.com";

export const MoviesService = {
  async getAllMovies(page = 1, genre) {
    const { data } = await axios.get("/titles", {
      params: {
        list: "most_pop_movies",
        info: "mini_info",
        page: page,
        genre: genre,
      },
    });

    return data;
  },

  async getMovieById(id: string) {
    const { data } = await axios.get(`/titles/${id}`, {
      params: {
        info: "custom_info",
      },
    });

    return data;
  },

  async getRandomTitles() {
    const { data } = await axios.get("/titles/random", {
      params: {
        list: "most_pop_movies",
      },
    });

    return data;
  },

  async getAllGenres() {
    const { data } = await axios.get("/titles/utils/genres");
    return data;
  },
};
