import { create } from "zustand";

export interface Movie {
  imdbID: string;
  Title: string;
  Plot: string;
  favorite: boolean;
}

export interface MovieStore {
  movies: Movie[];
  favorites: Movie[];
  setMovies: (movies: Movie[]) => void;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
}

export const useMovies = create<MovieStore>((set) => ({
  movies: [],
  favorites: [],
  setMovies: (movies: Movie[]) => set((state) => ({ ...state, movies })),
  addToFavorites: (movie: Movie) =>
    set((state) => {
      movie.favorite = true;
      return { ...state, favorites: [...state.favorites, movie] };
    }),
  removeFromFavorites: (movie: Movie) =>
    set((state) => {
      movie.favorite = false;
      const newFavorites = state.favorites.filter(
        (favoritedMovie) => favoritedMovie.imdbID !== movie.imdbID
      );
      return { ...state, favorites: newFavorites };
    }),
}));
