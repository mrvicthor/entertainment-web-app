import Image from "next/image";
import { useMovies } from "@/store";

const SearchTable = () => {
  const { search, setSearch } = useMovies();
  console.log(search);
  return (
    <form className="flex h-[1.5rem] min-w-[16.0625rem] space-x-4">
      <div className="relative">
        <Image
          src="./assets/icon-search.svg"
          width={24}
          height={24}
          alt="search icon"
        />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies or TV series"
        className="bg-transparent text-[#ffffff] outline-none placeholder:text-xs focus:outline-none"
      />
    </form>
  );
};

export default SearchTable;
