import Image from "next/image";

const SearchTable = () => {
  return (
    <form className="flex h-[1.5rem] w-[16.0625rem] space-x-4">
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
        placeholder="Search for movies or TV series"
        className="bg-transparent text-sm text-[#ffffff] outline-none focus:outline-none"
      />
    </form>
  );
};

export default SearchTable;
