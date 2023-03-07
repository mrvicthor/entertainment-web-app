"use client";
import { SearchTable } from "@/components";
const Bookmark = () => {
  return (
    <section className="w-screen space-y-6 pt-6 pl-4 md:pl-0 lg:pt-4">
      <SearchTable placeholder="Search for bookmarked shows" />
      <h1>Bookmark</h1>
    </section>
  );
};

export default Bookmark;
