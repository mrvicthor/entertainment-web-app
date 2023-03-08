"use client";
import { SearchTable, Movies as MovieList } from "@/components";
import { useMovies } from "@/store";
const Bookmark = () => {
  const { search, movies } = useMovies();
  const bookmarkedMovies = movies.filter((m) => m.isBookmarked === true);
  const filteredMovies = bookmarkedMovies.filter((m) => m.category === "Movie");
  const filteredTVSeries = bookmarkedMovies.filter(
    (m) => m.category === "TV Series"
  );
  return (
    <section className="space-y-6 pt-6 pl-4 md:pl-0 lg:pt-4 ">
      <div className="md:mx-auto md:max-w-[44.9375rem] md:pl-0 lg:mx-0 lg:max-w-full">
        <SearchTable placeholder="Search for bookmarked shows" />
      </div>
      <div className="md:mx-auto md:max-w-[44.9375rem] md:pl-0 lg:mx-0 lg:max-w-full">
        {search !== "" && movies.length == 0 && <p>No movies found</p>}
        {search !== "" ? null : (
          <p className="text-[1.25rem] leading-[25.2px] md:text-[2rem] md:leading-[40.32px]">
            Bookmarked Movies
          </p>
        )}
      </div>
      <MovieList movies={filteredMovies} />
      <div className="pt-6 md:mx-auto md:max-w-[44.9375rem] md:pl-0 lg:mx-0 lg:max-w-full">
        {search !== "" ? null : (
          <p className="text-[1.25rem] leading-[25.2px] md:text-[2rem] md:leading-[40.32px]">
            Bookmarked TV Series
          </p>
        )}
      </div>
      <MovieList movies={filteredTVSeries} />
    </section>
  );
};

export default Bookmark;
