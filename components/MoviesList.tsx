import { useMovies } from "../stores/moviesStore";
import MovieCard from "./MovieCard";
import Skeleton from "./Skeleton";

export default function MoviesList({ isFetching }: { isFetching: boolean }) {
  const { movies, search } = useMovies((state) => state);

  if (isFetching) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }

  if (!movies.length && !isFetching) {
    return (
      <div>
        <b>• No Movies Found with the name "{search}"</b>
      </div>
    );
  }

  const moviesList = movies.map((movie, i) => (
    <MovieCard key={i} movie={movie} />
  ));

  return <>{moviesList}</>;
}
