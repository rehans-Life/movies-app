import { useMovies } from "../stores/moviesStore";
import "./Favorites.css";

export default function Favorites() {
  const favorites = useMovies((state) => state.favorites);

  const favoritesList = favorites.map((movie, i) => (
    <div key={i} className="favorite-movie-title">
      {i + 1}. {movie.Title}
    </div>
  ));

  return (
    <div className="card favorites-card">
      <div className="favorites-heading">Favorite Movies</div>
      {favorites.length ? (
        <div className="favorite-movies">{favoritesList}</div>
      ) : (
        <div>
          <b>• No Movies Favorited</b>
        </div>
      )}
    </div>
  );
}
