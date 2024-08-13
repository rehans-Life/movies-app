import { useMovies } from "../stores/moviesStore";
import MovieCard from "./MovieCard";
import Skeleton from "./Skeleton";

export default function MoviesList({
  isFetching,
  isError,
}: {
  isFetching: boolean;
  isError: boolean;
}) {
  const { movies, search } = useMovies((state) => state);

  if (isFetching) {
    return (
      <>
        <Skeleton height="200px" width="100%" />
        <Skeleton height="200px" width="100%" />
        <Skeleton height="200px" width="100%" />
      </>
    );
  }

  if (isError) {
    return (
      <div>
        <b>
          • An error occured while loading the movies with the name "{search}"
        </b>
      </div>
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
