import { useMovies } from "../stores/moviesStore";
import MovieCard from "./MovieCard";
import Input from "./Input";
import "./Movies.css";

export default function Movies() {
  const { movies, search, setSearch } = useMovies((state) => state);

  const moviesList = movies.map((movie, i) => (
    <MovieCard key={i} movie={movie} />
  ));
  return (
    <div className="movies-card">
      <Input label="Search for movies" value={search} onChange={setSearch} />
      {movies.length ? (
        moviesList
      ) : (
        <div>
          <b>• No Movies Found with the name "{search}"</b>
        </div>
      )}
    </div>
  );
}
