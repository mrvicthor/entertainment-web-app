"use client";
import { useState, useEffect, createContext, ReactNode } from "react";
import { Movies } from "@/model";

export const MoviesContext = createContext({ movies: [] as Movies[] });

export const useMovies = () => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return { movies };
};

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MoviesContext.Provider value={useMovies()}>
      {children}
    </MoviesContext.Provider>
  );
};
