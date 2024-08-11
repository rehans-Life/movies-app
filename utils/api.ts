import { QueryFunction } from "@tanstack/react-query";
import { Movie } from "../stores/moviesStore";
import axios from "../utils/axios";

const API_KEY = "d59f7bf6";

export const getMovies: QueryFunction<{ Search: Movie[] }> = async () => {
  const response = await axios.get<{ Search: Movie[] }>(
    `/?s=Batman&page=2&apikey=${API_KEY}`
  );
  const data = response.data;
  return data;
};

export const getMovie: QueryFunction<Movie> = async ({ queryKey: [, id] }) => {
  const response = await axios.get<Movie>(`/?i=${id}&page=2&apikey=${API_KEY}`);
  const data = response.data;
  return data;
};
