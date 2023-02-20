import { Movies } from "@/model";
import Image from "next/image";

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
    </div>
  );
};

export default Trend;
