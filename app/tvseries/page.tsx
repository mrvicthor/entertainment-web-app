"use client";

import { SearchTable } from "@/components";
const TvSeries = () => {
  return (
    <section className="w-screen space-y-6 pt-6 pl-4 md:pl-0 lg:pt-4">
      <SearchTable placeholder="Search for TV series" />
      <h1>TV Series</h1>
    </section>
  );
};

export default TvSeries;
