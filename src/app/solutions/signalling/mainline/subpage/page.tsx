"use client";
import HeroText from "@/components/sections/HeroText";
import ImageFullWidth from "@/components/sections/ImageFullWidth";
import Text from "@/components/typography/Text";
import SmallWidth from "@/components/layouts/SmallWidth";




export default function SubPage() {
  return (
    <>
      <HeroText
        breadcrumbs={[
          { text: "Signalling", link: "/signalling" },
          { text: "Mainline", link: "/mainline" },
          { text: "Zugbeinflussung" },
        ]}
        title="Zugbeeinflussungssystem ETCS"
        leadText="Die steigenden Anforderungen im Zugverkehr zwingen die Betreiber sich auf spezifische strategische Ziele zu konzentrieren: Erhöhung der Reisegeschwindigkeit, Interoperabilität, Weiterverwendung der bestehenden Infrastruktur und Kosteneffizienz unter Beibehaltung des bestehenden Sicherheitsniveaus."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <SmallWidth>
        <div className="col-span-12 flex flex-col pb-24">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </div>
      </SmallWidth>
      <ImageFullWidth imgSrc="/ETCS-pano.jpg" />
    </>
  );
}
