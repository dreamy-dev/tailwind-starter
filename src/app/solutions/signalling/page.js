"use client";
import HeroText from "../../../components/sections/HeroText";
import ServiceTeasers from "../../../components/sections/ServiceTeasers";
import Contact from "../../../components/sections/Contact";

const teaserData = [
  {
    label: "Qualität & Sicherheit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/siherheit",
  },
  {
    label: "Mainline",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/mainline",
  },
  {
    label: "Branchline & LRV",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/branchline",
  },
  {
    label: "Metro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/metro",
  },
  {
    label: "Depot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/depot",
  },
  {
    label: "Dienstleistungen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/dienstleistungen",
  },
  {
    label: "After Sales & Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/news-1.jpg",
    href: "/solutions/signalling/sales",
  },
];

export default function Signalling() {
  return (
    <>
      <HeroText
        breadcrumbs={[
          { text: "Lösungen", link: "/solutions" }
        ]}
        title="Signalling für unsere Schienenfahrzeuge"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></HeroText>
   
      <ServiceTeasers
        mainTitle=""
        services={teaserData}
        imageStyles="w-full "
      ></ServiceTeasers>
      <Contact></Contact>
    </>
  );
}
