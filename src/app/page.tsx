"use client";

import { HomeIndex } from "@/components/HomeIndex";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <HomeIndex />
      <Footer />
    </div>
  );
}
