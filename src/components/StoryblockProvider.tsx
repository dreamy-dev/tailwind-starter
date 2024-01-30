"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import H1 from "./typography/H1";
import H2 from "./typography/H2";
import Teaser from "./Teaser";
//import Page from '../app/blok-tests/page'

const components = {
  title_h1: H1,
  title_h2: H2,
  teaser: Teaser,
  // page: Page,
};

storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
