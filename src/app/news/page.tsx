"use client";

import HeroText from "@/components/sections/HeroText";
import NewsSection from "@/components/sections/NewsSection";
import NewsFilters from "./NewsFilters";
import Contact from "@/components/sections/Contact";

import DoubleCardNews from "@/components/sections/DoubleCardNews";

export default function News() {
  return (
    <div>
      <HeroText
        breadcrumbs={[{ text: "Medien", link: "/medien" }]}
        title="News"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu tincidunt diam. Donec ac est in mi luctus elementum. Etiam eu tincidunt diam. Donec ac est in mi luctus elementum."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <NewsFilters />
      <NewsSection />
      <DoubleCardNews />
      <Contact />
    </div>
  );
}
