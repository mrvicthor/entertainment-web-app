import { Movies } from "@/model";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

interface TrendProps {
  trend: Movies;
}
const Trend = ({ trend }: TrendProps) => {
  return (
    <div className="relative h-[8.75rem] rounded-md">
      <Image
        src={trend.thumbnail.regular.small.replace(/^\.\//, "/")}
        alt="movie image"
        fill
        className="rounded-md object-cover"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className="absolute top-[5.375rem] left-4">
        <div className="flex items-center gap-1">
          <span className="text-[0.75rem] leading-[15.12px] opacity-75">
            {trend.year}
          </span>
          <div className=" text-[0.75rem] leading-[15.12px] opacity-75">
            <BsDot />
          </div>
          <div className="flex gap-1">
            <div className="relative">
              {trend.category === "TV Series" && (
                <Image
                  src="./assets/icon-category-tv.svg"
                  alt="tv series"
                  height={15}
                  width={15}
                />
              )}
              {trend.category === "Movie" && (
                <Image
                  src="./assets/icon-category-movie.svg"
                  alt="movie"
                  height={15}
                  width={15}
                />
              )}
            </div>
            {trend.category === "Movie" && (
              <p className="text-[0.75rem] leading-[15.12px] opacity-75">
                Movie
              </p>
            )}
            {trend.category === "TV Series" && (
              <p className="text-[0.75rem] leading-[15.12px] opacity-75">
                TV Series
              </p>
            )}
          </div>
          <div className=" text-[0.75rem] leading-[15.12px] opacity-75">
            <BsDot />
          </div>
          <span className="text-[0.75rem] leading-[15.12px] opacity-75">
            {trend.rating}
          </span>
        </div>
        <p className="pt-1 text-[0.9375rem] font-medium leading-[18.9px]">
          {trend.title}
        </p>
      </div>
      <div className="absolute right-2 top-2 flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#10141E] opacity-50">
        <div className=" relative">
          <Image
            src="./assets/icon-bookmark-empty.svg"
            alt="empty bookmark"
            height={14}
            width={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Trend;
