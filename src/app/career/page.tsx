"use client";
import ApplicationProcess from "@/components/ApplicationProcess";
import Application from "@/components/ApplicationProcess";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Figures from "@/components/Figures";
import Jobs from "@/components/Jobs";
import Nav from "@/components/Nav";
import Testimonial from "@/components/Testimonial";
import CareerHero from "../../components/Hero";

export default function Karriere() {
  return (
    <>
      <CareerHero></CareerHero>
      <Nav />
      <Benefits />
      <Testimonial />
      <Figures />
      <Jobs />
      <ApplicationProcess />
      <CTASection />
    </>
  );
}
