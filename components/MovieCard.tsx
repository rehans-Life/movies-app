import { Movie, useMovies } from "../stores/moviesStore";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../utils/api";
import MovieDescription from "./MovieDescription";
import "./MovieCard.css";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { addToFavorites, removeFromFavorites } = useMovies((state) => state);

  const {
    data: movieData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movies", movie.imdbID],
    queryFn: getMovie,
  });

  return (
    <div className="card">
      <div className="movie-card">
        {movie.Poster !== "N/A" ? (
          <img
            className="movie-img"
            src={movieData?.Poster}
            alt={`${movie.Title}-poster`}
          />
        ) : (
          <div className="placeholder"></div>
        )}
        <div className="movie-info">
          <div className="movie-card-header">
            <div className="movie-heading">{movie.Title}</div>
            <div
              className={`circle ${movie.favorite && "circle-selected"}`}
            ></div>
          </div>
          <MovieDescription
            isLoading={isLoading}
            isError={isError}
            desc={movieData?.Plot}
          />
          <button
            type="button"
            className={`action-btn ${
              movie.favorite ? "unfavorite-btn" : "favorite-btn"
            }`}
            onClick={() => {
              if (movie.favorite) {
                removeFromFavorites(movie);
                return;
              }
              addToFavorites(movie);
            }}
          >
            {movie.favorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}
