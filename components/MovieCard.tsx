import { Movie, useMovies } from "../stores/moviesStore";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../utils/api";
import "./MovieCard.css";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { addToFavorites, removeFromFavorites } = useMovies((state) => state);

  const { data: movieData } = useQuery({
    queryKey: ["movies", movie.imdbID],
    queryFn: getMovie,
  });

  return (
    <div
      className="card"
      onClick={() => {
        if (movie.favorite) {
          removeFromFavorites(movie);
          return;
        }
        addToFavorites(movie);
      }}
    >
      <div className="movie-card-header">
        <div className="movie-heading">{movie.Title}</div>
        <div className={`circle ${movie.favorite && "circle-selected"}`}></div>
      </div>
      <div className="movie-desc">{movieData?.Plot}</div>
    </div>
  );
}
