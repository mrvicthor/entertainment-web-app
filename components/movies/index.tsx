import { Movie } from "@/components";
import { useMovies } from "@/store";

const Movies = () => {
  const { movies, search } = useMovies();
  //   let allMovies = movies;
  //   if (search) {
  //     allMovies = allMovies.filter((movie) =>
  //       movie.title.toLowerCase().startsWith(search.toLowerCase())
  //     );
  //   }
  console.log(search);
  return (
    <section className="space-y-6">
      {search !== "" && movies.length > 0 && (
        <p>
          Found {movies.length} {movies.length > 1 ? "results" : "result"} for{" "}
          {search}
        </p>
      )}
      {search !== "" ? null : (
        <h2 className="text-[1.25rem] leading-[25.2px] tracking-tight md:text-[2rem] md:leading-[40.32px]">
          Recommended for you
        </h2>
      )}
      <div className="grid auto-cols-[10.25rem] grid-cols-2 gap-x-[0.9375rem] gap-y-4 pr-4 md:auto-cols-[13.75rem] md:grid-cols-3 md:gap-y-6 lg:auto-cols-[17.5rem] lg:grid-cols-4 lg:gap-y-12 lg:gap-x-[2.5rem]">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
