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
          <div className="movie-desc">
            {movieData?.Plot ||
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vero vitae minima sapiente nostrum maxime a magnam molestias neque sunt, hic qui corrupti deserunt sequi, ut dolor nisi ipsum pariatur."}
          </div>
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
