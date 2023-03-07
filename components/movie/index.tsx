import { Movies } from "@/model";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { useMovies } from "@/store";
interface MovieProp {
  movie: Movies;
}
const Movie = ({ movie }: MovieProp) => {
  const { toggleBookmark } = useMovies();
  return (
    <div className="group relative h-[9.625rem] cursor-pointer space-y-2 md:h-[12rem]">
      <div className="relative h-[6.875rem] rounded-md duration-700 ease-in-out group-hover:scale-105 md:h-[8.75rem] lg:h-[10.875rem]">
        <Image
          src={movie.thumbnail.regular.small.replace(/^\.\//, "/")}
          alt="movie image"
          fill
          className="rounded-md object-cover"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="">
        <div className="flex items-center gap-1">
          <span className="text-[0.75rem] leading-[15.12px] opacity-75">
            {movie.year}
          </span>
          <div className=" text-[0.75rem] leading-[15.12px] opacity-75">
            <BsDot />
          </div>
          <div className="flex gap-1">
            <div className="relative">
              {movie.category === "TV Series" && (
                <Image
                  src="./assets/icon-category-tv.svg"
                  alt="tv series"
                  height={15}
                  width={15}
                />
              )}
              {movie.category === "Movie" && (
                <Image
                  src="./assets/icon-category-movie.svg"
                  alt="movie"
                  height={15}
                  width={15}
                />
              )}
            </div>
            {movie.category === "Movie" && (
              <p className="text-[0.75rem] leading-[15.12px] opacity-75">
                Movie
              </p>
            )}
            {movie.category === "TV Series" && (
              <p className="text-[0.75rem] leading-[15.12px] opacity-75">
                TV Series
              </p>
            )}
          </div>
          <div className=" text-[0.75rem] leading-[15.12px] opacity-75">
            <BsDot />
          </div>
          <span className="text-[0.75rem] leading-[15.12px] opacity-75">
            {movie.rating}
          </span>
        </div>
        <p className="pt-1 text-[0.9375rem] font-medium leading-[18.9px] md:text-[1.125rem] md:leading-[30.24px]">
          {movie.title}
        </p>
      </div>
      <div
        onClick={() => {
          console.log(movie);
          toggleBookmark(movie);
        }}
        className="absolute right-2 top-0 flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#10141E] opacity-50 md:top-0 md:right-4 lg:top-1"
      >
        <div className=" relative">
          {movie.isBookmarked === true ? (
            <Image
              src="./assets/icon-bookmark-full.svg"
              alt="empty bookmark"
              height={14}
              width={12}
            />
          ) : (
            <Image
              src="./assets/icon-bookmark-empty.svg"
              alt="empty bookmark"
              height={14}
              width={12}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Movie;
