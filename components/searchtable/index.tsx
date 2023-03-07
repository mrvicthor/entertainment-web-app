import Image from "next/image";
import { useMovies } from "@/store";

interface InputProps {
  placeholder: string;
}

const SearchTable = ({ placeholder }: InputProps) => {
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
        placeholder={placeholder}
        className="bg-transparent text-[#ffffff] outline-none placeholder:text-xs focus:outline-none md:text-[1.5rem]"
      />
    </form>
  );
};

export default SearchTable;
