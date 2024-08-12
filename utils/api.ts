import { QueryFunction } from "@tanstack/react-query";
import { Movie, MovieData } from "../stores/moviesStore";
import axios from "../utils/axios";

const API_KEY = "1dc76819";

export const getMovies: QueryFunction<{ Search?: Movie[] }> = async ({
  queryKey: [, search],
  signal,
}) => {
  const response = await axios.get<{ Search: Movie[] }>(
    `/?s=${search}&apikey=${API_KEY}`,
    { signal }
  );
  const data = response.data;
  return data;
};

export const getMovie: QueryFunction<Movie & MovieData> = async ({
  queryKey: [, id],
}) => {
  const response = await axios.get<Movie & MovieData>(
    `/?i=${id}&apikey=${API_KEY}`
  );
  const data = response.data;
  return data;
};
