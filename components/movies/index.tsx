import { Movie } from "@/components";
import { Movies } from "@/model";
import { useMovies } from "@/store";

interface MoviesProps {
  movies: Movies[];
}

const Movies = ({ movies }: MoviesProps) => {
  const { search } = useMovies();
  //   let allMovies = movies;
  //   if (search) {
  //     allMovies = allMovies.filter((movie) =>
  //       movie.title.toLowerCase().startsWith(search.toLowerCase())
  //     );
  //   }

  return (
    <section className="space-y-6 md:mx-auto md:max-w-[44.9375rem] lg:mx-0 lg:max-w-full">
      {search !== "" && movies.length > 0 && (
        <p>
          Found {movies.length} {movies.length > 1 ? "results" : "result"} for{" "}
          {search}
        </p>
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
