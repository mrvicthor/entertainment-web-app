"use client";
import "./globals.css";

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
        <body>{children}</body>
      </html>
    </MoviesProvider>
  );
}
