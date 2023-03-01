import { SearchTable, Trends, Movies } from "@/components";

import { Movies as MyMovies } from "@/model";
import { useState } from "react";

interface FilterProps {
  allMovies: MyMovies[];
}

const FilterMovies = ({ allMovies }: FilterProps) => {
  const [search, setSearch] = useState("");
  const trendingMovies = allMovies.filter((movie) => movie.isTrending === true);
  if (search) {
    allMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().startsWith(search.toLowerCase())
    );
  }
  console.log(trendingMovies);
  return (
    <section className="space-y-6 pt-6 pl-4 md:pl-0">
      <SearchTable search={search} setSearch={setSearch} />
      {search !== "" && allMovies.length == 0 && <p>No movies found</p>}
      {search !== "" ? null : <Trends trendingMovies={trendingMovies} />}

      <Movies movies={allMovies} search={search} />
    </section>
  );
};
export default FilterMovies;
