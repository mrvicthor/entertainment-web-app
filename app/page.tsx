"use client";
import { MoviesContext } from "@/store";
import Image from "next/image";
import { useContext } from "react";
import { Header, FilterMovies } from "@/components";

// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const movies = useContext(MoviesContext);
  console.log;
  return (
    <section className="md:pt-6 lg:pt-8 lg:pl-8">
      <div className="grid h-full auto-rows-fr lg:grid-cols-12 lg:gap-x-[2.25rem]">
        <Header />
        <main className="lg:col-start-2 lg:col-end-13">
          <FilterMovies />
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <h2>
            {movies.movies.map((movie, i) => (
              <div className="relative h-[110px] w-[164px]" key={i}>
                <Image
                  src={movie.thumbnail.regular.small.replace(/^\.\//, "/")}
                  alt="movie image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            ))}
          </h2> */}
        </main>
      </div>
    </section>
  );
}
