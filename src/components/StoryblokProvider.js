"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../components/sections/Page";
import Footer from "./sections/Footer";
import HeroText from "./sections/HeroText";
import FactsAndFigures from "./sections/FactsAndFigures";
import Video from "./sections/Video";
import HomePageHero from "./sections/HomePageHero";
import TeaserImageLeft from "./sections/TeaserImageLeft";
import TeaserImageRight from "./sections/TeaserImageright";
import Header from "./sections/Header";
import ImageFullWidth from "./sections/ImageFullWidth";
import Career from "./sections/Career";
import Features from "./sections/Features";
import Map from "./sections/Map";
import TextSection from "./sections/TextSection";
import QualityFeatureGrid from "./sections/QualityFeatureGrid";
import QualityFeatureItem from "./sections/QualityFeatureItem";
 //import HomePageCaroucel from "./sections/HomePageCaroucel";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    footer: Footer,
    header: Header,
    map: Map,
    "feature-grid": QualityFeatureGrid,
    "feature-item": QualityFeatureItem,
    "text-block": TextSection,
    "double-page-teaser": Features,
    "simple-page-teaser": Career,
    "image-full-width": ImageFullWidth,
    "hero-subpage": HeroText,
    "facts-figures": FactsAndFigures,
    "video-teaser": Video,
    "hero-home": HomePageHero,
    "teaser-image-left": TeaserImageLeft,
    "teaser-image-right": TeaserImageRight,
    //"success-stories": HomePageCaroucel,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}

// "use client";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
// import Teaser from "./Teaser";
// import Page from "./sections/Page";

// const components = {
//   teaser: Teaser,
//   page: Page,
// };

// storyblokInit({
//   accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
//   use: [apiPlugin],
//   components,
// });

// export default function StoryblokProvider({ children }) {
//   return children;
// }
