"use client";

import ButtonPrimary from "@/components/elements/ButtonPrimary";
import Button from "@/components/elements/ButtonPrimary";
import ButtonSecondary from "@/components/elements/ButtonSecondary";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";
import Lead from "@/components/typography/Lead";

export default function Theme() {
  return (
    <main className="container mx-auto px-4">
      <p>Typography</p>
      <H1></H1>
      <H2 />
      <H3 />
      <H4 />
      <Lead />

      <p>Elements</p>
      <ButtonPrimary />
      <ButtonSecondary />
    </main>
  );
}
