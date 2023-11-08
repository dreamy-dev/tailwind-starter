"use client";
import ApplicationProcess from "@/app/career/ApplicationProcess";
import CTASection from "@/components/sections/CTASection";
import FactsAndFigures from "@/components/FactsAndFigures";
import Jobs from "@/components/sections/TeaserJobs";
import Intro from "@/components/sections/Intro";
import Testimonials from "@/components/sections/Testimonials";
import CareerHero from "../../components/sections/HeroCareer";
import TeaserSuccessStories from "@/components/sections/TeaserSuccessStories";

export default function Karriere() {
  return (
    <>
      <CareerHero></CareerHero>
      <Intro />
      <Testimonials />
      <FactsAndFigures />
      <Jobs />
      <ApplicationProcess />
      <TeaserSuccessStories />
      <CTASection />
    </>
  );
}
