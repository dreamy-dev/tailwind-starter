"use client";

import Hero from "./Hero";
import Cards from "../../components/Cards";
import FormSubscribe from "./Form";
import Event from "../../components/Event";

export default function Company() {
  return (
    <>
      <Hero></Hero>
      <Event></Event>
      <Cards></Cards>
      <FormSubscribe />
    </>
  );
}
