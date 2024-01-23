"use client";
import H1 from "@/components/typography/H1";
import Text from "@/components/typography/Text";
import SmalltWidth from "@/components/layouts/SmallWidth";
import Link from "next/link";

export default function Impressum() {
  return (
    <>
      <SmalltWidth>
        <div className="max-w-full col-span-12 my-20">
          <H1>Impressum</H1>
          <Text styles="mb-6">
            Stadler Rail AG, Ernst-Stadler-Strasse 1, 9565 Bussnang, Schweiz
          </Text>
          <p>
            {" "}
            <Link href="mailto:stadler.rail@stadlerrail.com" className="text-primary">
              stadler.rail@stadlerrail.com
            </Link>{" "}
            / +41 71 626 21 20
          </p>
        </div>
      </SmalltWidth>
    </>
  );
}
