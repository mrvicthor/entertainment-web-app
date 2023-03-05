import { SearchTable, Trends, Movies } from "@/components";
import { useMovies } from "@/store";

const FilterMovies = () => {
  const { search, movies } = useMovies();
  const trendingMovies = movies.filter((movie) => movie.isTrending === true);

  return (
    <section className="space-y-6 pt-6 pl-4 md:pl-0 lg:pt-4">
      <SearchTable />
      {search !== "" && movies.length == 0 && <p>No movies found</p>}
      {search !== "" ? null : <Trends trendingMovies={trendingMovies} />}

      <Movies />
    </section>
  );
};
export default FilterMovies;
