"use client";
import { Header, FilterMovies } from "@/components";

export default function Home() {
  return (
    <section className=" md:pt-6 lg:pt-8 lg:pl-8">
      <div className="grid h-full lg:grid-cols-12 lg:gap-x-[2.5rem]">
        <Header />
        <main className="overflow-hidden pb-[3.8125rem] md:mx-auto md:max-w-[44.9375rem] lg:col-start-2 lg:col-end-13 lg:max-w-full lg:pl-4">
          <FilterMovies />
        </main>
      </div>
    </section>
  );
}
