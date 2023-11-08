"use client";
import ApplicationProcess from "@/components/ApplicationProcess";
import CTASection from "@/components/CTASection";
import FactsAndFigures from "@/components/FactsAndFigures";
import Jobs from "@/components/Jobs";
import Intro from "@/components/sections/Intro";
import Testimonials from "@/components/sections/Testimonials";
import CareerHero from "../../components/sections/HeroCareer";

export default function Karriere() {
  return (
    <>
      <CareerHero></CareerHero>
      <Intro />
      <Testimonials />
      <FactsAndFigures />
      <Jobs />
      <ApplicationProcess />
      <CTASection />
    </>
  );
}
