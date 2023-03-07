import { SearchTable, Trends, Movies } from "@/components";
import { useMovies } from "@/store";

const FilterMovies = () => {
  const { search, movies } = useMovies();
  const trendingMovies = movies.filter((movie) => movie.isTrending === true);

  return (
    <section className="space-y-6 pt-6 pl-4 md:mx-auto md:max-w-[44.9375rem] md:pl-0 lg:mx-0 lg:max-w-full lg:pt-4">
      <SearchTable placeholder="Search for movies or TV series" />
      {search !== "" && movies.length == 0 && <p>No movies found</p>}
      {search !== "" ? null : <Trends trendingMovies={trendingMovies} />}
      {search !== "" ? null : (
        <h2 className="text-[1.25rem] leading-[25.2px] tracking-tight md:text-[2rem] md:leading-[40.32px]">
          Recommended for you
        </h2>
      )}
      <Movies />
    </section>
  );
};
export default FilterMovies;
