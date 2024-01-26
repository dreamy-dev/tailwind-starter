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
 //import HomePageCaroucel from "./sections/HomePageCaroucel";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
  components: {
    page: Page,
    footer: Footer,
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
