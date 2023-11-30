"use client";

import ButtonPrimary from "@/components/elements/ButtonPrimary";
import Button from "@/components/elements/ButtonSecondary";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";
import Lead from "@/components/typography/Lead";
import Text from "@/components/typography/Text";

export default function Theme() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col">
      <p>Typography</p>
      <hr />
      <br />
      <H1></H1>
      <H2>hello there</H2>
      <H3>hello there</H3>
      <H4 textColor="black">hello there</H4>
      <Lead>Lead Text</Lead>
      <Text>Text</Text>

      <br />
      <p>Elements</p>
      <hr />
      <br />
      <ButtonPrimary>See more</ButtonPrimary>
      <br />
      <Button
        backgroundColorClass="bg-white"
        borderColorClass="border-primary"
        textColorClass="text-primary"
      >
        Buttom text
      </Button>
      {/* TODO:
      - Text Link
      - Icon Link */}
    </main>
  );
}
