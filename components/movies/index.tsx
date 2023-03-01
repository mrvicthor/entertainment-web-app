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
        <h2 className="text-[1.25rem] leading-[25.2px] tracking-tight">
          Recommended for you
        </h2>
      )}
      <div className="grid auto-cols-[10.25rem] grid-cols-2 gap-x-[0.9375rem] gap-y-4 pr-4">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
