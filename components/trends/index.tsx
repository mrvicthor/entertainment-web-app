import { Trend } from "@/components";
import { Movies } from "@/model";

interface TrendsProps {
  trendingMovies: Movies[];
}

const Trends = ({ trendingMovies }: TrendsProps) => {
  return (
    <section className="space-y-4">
      <h1 className="text-[1.25rem]">Trending</h1>
      <div className="grid w-full auto-cols-[15rem] grid-flow-col gap-x-4 overflow-x-auto overscroll-x-contain pr-6">
        {trendingMovies.map((trend, i) => (
          <Trend key={i} trend={trend} />
        ))}
      </div>
    </section>
  );
};

export default Trends;
