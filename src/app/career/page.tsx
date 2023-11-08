"use client";
import ApplicationProcess from "@/components/ApplicationProcess";
import CTASection from "@/components/CTASection";
import Figures from "@/components/Figures";
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
      <Figures />
      <Jobs />
      <ApplicationProcess />
      <CTASection />
    </>
  );
}
