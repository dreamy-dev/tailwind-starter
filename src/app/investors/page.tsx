"use client";

import FactsAndFigures from "@/components/FactsAndFigures";
import Contact from "@/components/sections/Contact";
import Subscribe from "@/components/Subscribe";

export default function Investors() {
  return (
    <section>
      {/* Letzte Publikationen */}
      {/* News & Events */}
      <FactsAndFigures />
      {/* Warum investieren, Geschätsmodell, Kultur & Mission */}
      {/* Governance */}
      <Contact />
      <Subscribe />
    </section>
  );
}
