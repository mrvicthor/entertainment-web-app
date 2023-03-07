"use client";
import "./globals.css";
import { Header } from "@/components";
import { MoviesProvider } from "@/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MoviesProvider>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />

        <body>
          <section className=" md:pt-6 lg:pt-8 lg:pl-8">
            <div className="grid h-full lg:grid-cols-12 lg:gap-x-[2.5rem]">
              <Header />
              <main className="overflow-hidden pb-[3.8125rem]  lg:col-start-2 lg:col-end-13  lg:pl-4">
                {children}
              </main>
            </div>
          </section>
        </body>
      </html>
    </MoviesProvider>
  );
}
