"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../components/sections/Page";

import Footer from "./sections/Footer";
import HeroText from "./sections/HeroText";
import FactsAndFigures from "./sections/FactsAndFigures";



/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
  components: {
    page: Page,
    footer: Footer,
    "hero-subpage": HeroText,
    "facts-figures": FactsAndFigures,
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
