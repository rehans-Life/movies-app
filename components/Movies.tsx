import { useMovies } from "../stores/moviesStore";
import MovieCard from "./MovieCard";
import "./Movies.css";

export default function Movies() {
  const { movies } = useMovies((state) => state);

  const moviesList = movies.map((movie, i) => (
    <MovieCard key={i} movie={movie} />
  ));
  return <div className="movies-card">{moviesList}</div>;
}
