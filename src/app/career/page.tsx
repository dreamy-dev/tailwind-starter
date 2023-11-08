"use client";
import ApplicationProcess from "@/components/ApplicationProcess";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Figures from "@/components/Figures";
import Jobs from "@/components/Jobs";
import Nav from "@/components/Nav";
import Intro from "@/components/sections/Intro";
import Testimonial from "@/components/Testimonial";
import CareerHero from "../../components/sections/HeroCareer";

export default function Karriere() {
  return (
    <>
      <CareerHero></CareerHero>
      {/* <Nav /> */}
      <Intro />
      <Benefits />
      <Testimonial />
      <Figures />
      <Jobs />
      <ApplicationProcess />
      <CTASection />
    </>
  );
}
