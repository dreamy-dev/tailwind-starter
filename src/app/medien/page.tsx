"use client";

import Contact from "@/components/sections/Contact";
import Subscribe from "@/components/sections/Subscribe";
import Publicationen from "@/components/sections/Publikationen";
import HeroText from "@/components/sections/HeroText";


export default function Medien() {
  return (
    <div>
      <HeroText
       
     
        title={<>Medienbereich</>}
        leadText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <Publicationen></Publicationen>
      <Contact></Contact>
      <Subscribe />
    </div>
  );
}
