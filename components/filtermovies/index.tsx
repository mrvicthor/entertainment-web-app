import { SearchTable, Trends } from "@/components";
import { MoviesContext } from "@/store";
import { useContext } from "react";

const FilterMovies = () => {
  const { movies } = useContext(MoviesContext);
  const trendingMovies = movies.filter((movie) => movie.isTrending === true);
  console.log(trendingMovies);
  return (
    <section className="space-y-6 pt-6 pl-4 ">
      <SearchTable />
      <Trends trendingMovies={trendingMovies} />
    </section>
  );
};
export default FilterMovies;
