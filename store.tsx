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
    | { type: "setBookmark"; payload: number };

  const [{ movies, search }, dispatch] = useReducer(
    (state: MovieState, action: MovieAction) => {
      switch (action.type) {
        case "setMovies":
          return { ...state, movies: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
        case "setBookmark":
          return {
            ...state,
            movies: state.movies.map((m: any, index: number) => {
              if (m.id === action.payload) {
                return { ...m, isBookmarked: !m.isBookmarked };
              }
              return m;
            }),
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

  const setBookmark = useCallback((index: number) => {
    dispatch({ type: "setBookmark", payload: index });
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

  return { movies: filteredMovies, search, setSearch };
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
