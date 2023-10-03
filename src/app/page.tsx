"use client";
import { getStoryblokApi } from "@storyblok/react";

import Hero from "./Hero";
import Stats from "./Stats";

export default async function HomePage() {
  const { data } = await fetchData();
  return (
    <>
      <h2>Story: {data.story.name}</h2>
      <Hero />
      <Stats />
    </>
  );
}

export async function fetchData() {
  type SBParams = {
    version: "draft"; // You can specify the allowed values here
  };
  let sbParams: SBParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
