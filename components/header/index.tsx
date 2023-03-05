import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[3.5rem] md:h-[4.5rem] lg:col-span-1 lg:h-screen lg:w-[6rem] lg:pb-16">
      <nav className="flex items-center justify-between bg-[#161D2F] px-4 py-[1.125rem] md:mx-auto md:max-w-[44.9375rem] md:rounded-md lg:h-full lg:flex-col">
        <div className="relative cursor-pointer">
          <Link href="/">
            <Image src="./assets/logo.svg" alt="Logo" width={25} height={20} />
          </Link>
        </div>
        <div className="flex items-center gap-[1.5rem] lg:mb-auto lg:mt-[4.6875rem] lg:flex-col">
          <Link href="/">
            <div className="relative cursor-pointer">
              {" "}
              <Image
                src="./assets/icon-nav-home.svg"
                alt="Home Logo"
                width={16}
                height={16}
              />
            </div>
          </Link>
          <Link href="/movies">
            <div className="relative cursor-pointer">
              <Image
                src="./assets/icon-nav-movies.svg"
                alt="Movies Logo"
                width={16}
                height={16}
              />
            </div>
          </Link>
          <Link href="/tvseries">
            <div className="relative cursor-pointer">
              <Image
                src="./assets/icon-nav-tv-series.svg"
                alt="TV-Series Logo"
                width={16}
                height={16}
              />
            </div>
          </Link>
          <Link href="/bookmark">
            <div className="relative cursor-pointer">
              <Image
                src="./assets/icon-nav-bookmark.svg"
                alt="Bookmark Logo"
                width={16}
                height={16}
              />
            </div>
          </Link>
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
