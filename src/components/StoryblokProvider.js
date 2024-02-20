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
import FactsAndFiguresGrid from "./sections/FactsFiguresGrid";
import FactsAndFiguresItem from "./sections/FactsFiguresItem";
import AccordionGrid from "./sections/AccordionGrid";
import AccordionItem from "./sections/AccordionItem";
import Description from "./sections/Description";
import AdvantageItem from "./sections/AdvantageItem";
import AdvantagesGrid from "./sections/AdvantagesGrid";
//import ButtonPrimary from "./elements/ButtonPrimary";
//import SubHero from "./sections/SubHero";
//import HomePageCaroucel from "./sections/HomePageCaroucel";


storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    footer: Footer,
    header: Header,
    map: Map,
    "facts-figures-grid": FactsAndFiguresGrid,
    "facts-figures-item": FactsAndFiguresItem,
    "feature-grid": QualityFeatureGrid,
    "feature-item": QualityFeatureItem,
    "text-block": TextSection,
    "double-page-teaser": Features,
    "simple-page-teaser": Career,
    "image-full-width": ImageFullWidth,
    "hero-subpage": HeroText,
    "video-teaser": Video,
    "hero-home": HomePageHero,
    "teaser-image-left": TeaserImageLeft,
    "teaser-image-right": TeaserImageRight,
    "image-left": Description,
     "accordion-item": AccordionItem,
    "accordion-grid": AccordionGrid,
    "highlights-grid": AdvantagesGrid,
     "highlights-item": AdvantageItem
    //"success-stories": HomePageCaroucel,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}


