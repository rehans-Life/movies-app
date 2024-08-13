import { create } from "zustand";

export interface Movie {
  imdbID: string;
  Title: string;
  favorite: boolean;
  Poster: string;
}

export interface MovieData {
  Plot: string;
}

export interface MovieStore {
  search: string;
  movies: Movie[];
  favorites: Movie[];
  setSearch: (search: string) => void;
  setMovies: (movies: Movie[]) => void;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
}

export const useMovies = create<MovieStore>((set) => ({
  search: "Batman",
  movies: [],
  favorites: [],
  setSearch: (search: string) => set((state) => ({ ...state, search })),
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
