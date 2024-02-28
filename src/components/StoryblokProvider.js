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
import PortraitGrid from "./sections/PortraitGrid";
import PortraitItem from "./sections/PortraitItem";
import ServiceTeaserItem from "./sections/ServiceTeaserItem";
import ServiceTeasersGrid from "./sections/ServiceTeasersGrid";
import TableGrid from "./sections/Table";
import TableItem from "./sections/TableItem";
import Contact from "./sections/Contact";
import SolutionsGrid from "./sections/SolutionsGrid";
import SolutionsGridItem from "./sections/SolutionsGridItem";
import DownloadItem from "./sections/DownloadItem";
import ButtonPrimary from "./elements/ButtonPrimary";
import ReportsGrid from "./sections/ReportsGrid";
import ReportsItem from "./sections/ReportsItem.js";
import ImageTrippleBanner from "./sections/ImageTrippleBanner";
import SimpleText from "./sections/SimpleText"
//import SubHero from "./sections/SubHero";
//import HomePageCaroucel from "./sections/HomePageCaroucel";


storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    footer: Footer,
    header: Header,
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
    "highlights-item": AdvantageItem,
    "portrait-grid": PortraitGrid,
    portrait: PortraitItem,
    "services-grid": ServiceTeasersGrid,
    "services-item": ServiceTeaserItem,
    "table-section": TableGrid,
    // "table-item": TableItem,
    "contact-section": Contact,
    "solution-item": SolutionsGridItem,
    "solutions-grid": SolutionsGrid,
    "cta-small": DownloadItem,
    //cta: ButtonPrimary,
    "reports-grid": ReportsGrid,
    "reports-item": ReportsItem,
    "image-tripple-banner": ImageTrippleBanner,
    "textSection": SimpleText
    //"contact-field": Contact,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}


