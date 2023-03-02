"use client";
import {
  useEffect,
  createContext,
  ReactNode,
  useReducer,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { Movies } from "@/model";

function useMovieSource(): {
  movies: Movies[];
  search: string;
  setSearch: (search: string) => void;
  toggleBookmark: (movie: Movies) => void;
} {
  type MovieState = {
    movies: Movies[];
    search: string;
  };

  type MovieAction =
    | {
        type: "setMovies";
        payload: Movies[];
      }
    | { type: "setSearch"; payload: string }
    | { type: "toggleBookmark"; payload: Movies };

  const [{ movies, search }, dispatch] = useReducer(
    (state: MovieState, action: MovieAction) => {
      switch (action.type) {
        case "setMovies":
          return { ...state, movies: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
        case "toggleBookmark":
          return {
            ...state,
            movies: state.movies.map((movie) =>
              movie === action.payload
                ? { ...movie, isBookmarked: !movie.isBookmarked }
                : movie
            ),
          };
      }
    },
    {
      movies: [],
      search: "",
    }
  );

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "setMovies",
          payload: data,
        })
      );
  }, []);

  const toggleBookmark = useCallback((movie: Movies) => {
    dispatch({ type: "toggleBookmark", payload: movie });
  }, []);

  const setSearch = useCallback((search: string) => {
    dispatch({ type: "setSearch", payload: search });
  }, []);

  const filteredMovies = useMemo(
    () =>
      movies.filter((m) =>
        m.title.toLowerCase().includes(search.toLowerCase())
      ),
    [movies, search]
  );

  return { movies: filteredMovies, search, setSearch, toggleBookmark };
}

const MoviesContext = createContext<ReturnType<typeof useMovieSource>>(
  {} as unknown as ReturnType<typeof useMovieSource>
);

export function useMovies() {
  return useContext(MoviesContext);
}

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MoviesContext.Provider value={useMovieSource()}>
      {children}
    </MoviesContext.Provider>
  );
};
