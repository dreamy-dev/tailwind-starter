"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";

//import Testimonial from "./Testimonial";

storyblokInit({
  accessToken: "SIPyJNDrEIL5LqncrqovyQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    page: Page,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
