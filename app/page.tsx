"use client";
import { MoviesContext } from "@/store";
import { useContext, useState } from "react";
import { Header, FilterMovies } from "@/components";

export default function Home() {
  const { movies } = useContext(MoviesContext);
  let allMovies = movies;
  console.log;
  return (
    <section className=" md:pt-6 lg:pt-8 lg:pl-8">
      <div className="grid h-full lg:grid-cols-12 lg:gap-x-[2.25rem]">
        <Header />
        <main className="overflow-hidden pb-[3.8125rem] md:mx-auto md:max-w-[44.9375rem] lg:col-start-2 lg:col-end-13">
          <FilterMovies allMovies={allMovies} />
        </main>
      </div>
    </section>
  );
}
