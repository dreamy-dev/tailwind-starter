"use client";

import ButtonPrimary from "@/components/elements/ButtonPrimary";
import ButtonSecondary from "@/components/elements/ButtonSecondary";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";
import Lead from "@/components/typography/Lead";

export default function Theme() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col">
      <p>Typography</p>
      <hr />
      <br />
      <H1></H1>
      <H2 />
      <H3 />
      <H4 />
      <Lead />

      <br />
      <p>Elements</p>
      <hr />
      <br />
      <ButtonPrimary />
      <br />
      <ButtonSecondary />
      {/* TODO:
      - Text Link
      - Icon Link */}
    </main>
  );
}
