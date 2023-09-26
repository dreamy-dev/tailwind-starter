"use client";
import Benefits from "@/components/Benefits";
import Figures from "@/components/Figures";
import Nav from "@/components/Nav";
import NavTwo from "@/components/NavTwo";
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
    </>
  );
}
