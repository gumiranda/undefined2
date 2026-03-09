"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Backgrounds from "@/components/sections/backgrounds";
import TextEffects from "@/components/sections/text-effects";
import Cards from "@/components/sections/cards";
import Bento from "@/components/sections/bento";
import Interactive from "@/components/sections/interactive";
import TabsSection from "@/components/sections/tabs-section";
import Testimonials from "@/components/sections/testimonials";
import TimelineSection from "@/components/sections/timeline-section";
import Footer from "@/components/sections/footer";

const Parallax = dynamic(() => import("@/components/sections/parallax"), {
  ssr: false,
});
const Scroll = dynamic(() => import("@/components/sections/scroll"), {
  ssr: false,
});
const ThreeDMap = dynamic(() => import("@/components/sections/three-d-map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Hero />
      <Backgrounds />
      <TextEffects />
      <Cards />
      <Bento />
      <Interactive />
      <TabsSection />
      <Parallax />
      <Scroll />
      <Testimonials />
      <TimelineSection />
      <ThreeDMap />
      <Footer />
    </main>
  );
}
