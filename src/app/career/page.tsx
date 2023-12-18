"use client";
import ApplicationProcess from "@/app/career/ApplicationProcess";
import CTASection from "@/components/sections/CTASection";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Jobs from "@/components/sections/TeaserJobs";
import Intro from "@/components/sections/Intro";
import Testimonials from "@/components/sections/Testimonials";
import CareerHero from "./HeroCareer";
import TeaserSuccessStories from "@/components/sections/TeaserSuccessStories";
import ContentWidth from "@/components/layouts/ContentWidth";

export default function Karriere() {
  return (
    <>
      <CareerHero></CareerHero>
      <Intro />
      <ContentWidth>
        {" "}
        <div className="mt-20 col-span-12 max-w-full">
          <img
            className="w-full h-auto "
            src="/stadler-world-map-home.svg"
            alt=""
          />
        </div>
      </ContentWidth>

      <Testimonials />
      {/* <FactsAndFigures /> */}
      <Jobs />
      {/* <ApplicationProcess /> */}
      <TeaserSuccessStories />

      <CTASection />
    </>
  );
}
