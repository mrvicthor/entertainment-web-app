"use client";
import { SearchTable, Movies as MovieList } from "@/components";
import { useMovies } from "@/store";
const Movies = () => {
  const { search, movies } = useMovies();
  const filteredMovies = movies.filter((movie) => movie.category === "Movie");
  return (
    <section className="space-y-6 pt-6 pl-4 md:pl-0 lg:pt-4 ">
      <div className="md:mx-auto md:max-w-[44.9375rem] md:pl-0 lg:mx-0 lg:max-w-full">
        <SearchTable placeholder="Search for movies" />
      </div>
      <div className="md:mx-auto md:max-w-[44.9375rem] md:pl-0 lg:mx-0 lg:max-w-full">
        {search !== "" && movies.length == 0 && <p>No movies found</p>}
        {search !== "" ? null : (
          <h2 className="text-[1.25rem] leading-[25.2px] md:text-[2rem] md:leading-[40.32px]">
            Movies
          </h2>
        )}
      </div>
      <MovieList movies={filteredMovies} />
    </section>
  );
};

export default Movies;
