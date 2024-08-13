import { useMovies } from "../stores/moviesStore";
import Input from "./Input";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../utils/api";
import MoivesList from "./MoviesList";
import "./Movies.css";

export default function Movies() {
  const { search, setSearch, setMovies, favorites } = useMovies(
    (state) => state
  );

  const { isFetching, isError } = useQuery({
    queryKey: ["movies", search],
    queryFn: async (queryContext) => {
      const data = await getMovies(queryContext);
      const movies = data?.Search || [];
      setMovies(
        movies.map((movie) => ({
          ...movie,
          favorite: favorites.some(
            (favoritedMovie) => favoritedMovie.imdbID === movie.imdbID
          ),
        }))
      );
      return data;
    },
  });

  return (
    <div className="movies-card">
      <Input label="Search for movies" value={search} onChange={setSearch} />
      <MoivesList isFetching={isFetching} isError={isError} />
    </div>
  );
}
