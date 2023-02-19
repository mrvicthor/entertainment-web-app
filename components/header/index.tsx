import BookmarkLogo from "assets/icon-bookmark-empty.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[3.5rem] md:h-[4.5rem] lg:col-span-1 lg:h-screen lg:w-[6rem] lg:pb-16">
      <nav className="flex items-center justify-between bg-[#161D2F] px-4 py-[1.125rem] md:mx-auto md:max-w-[44.9375rem] md:rounded-md lg:h-full lg:flex-col">
        <div className="relative cursor-pointer">
          <Image
            src="./assets/logo.svg"
            alt="Bookmark Logo"
            width={25}
            height={20}
          />
        </div>
        <div className="flex items-center gap-[1.5rem] lg:mb-auto lg:mt-[4.6875rem] lg:flex-col">
          <div className="relative cursor-pointer">
            {" "}
            <Image
              src="./assets/icon-nav-home.svg"
              alt="Bookmark Logo"
              width={16}
              height={16}
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src="./assets/icon-nav-movies.svg"
              alt="Bookmark Logo"
              width={16}
              height={16}
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src="./assets/icon-nav-tv-series.svg"
              alt="Bookmark Logo"
              width={16}
              height={16}
            />
          </div>
          <div className="relative cursor-pointer">
            <Image
              src="./assets/icon-nav-bookmark.svg"
              alt="Bookmark Logo"
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="relative cursor-pointer">
          <Image
            src="/assets/image-avatar.png"
            alt="avatar image"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
