

import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";


export default async function Home() {
  const { data } = await fetchData();
  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let slug = "blok-tests";
  let sbParams = { version: "public" };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
    cache: "no-store",
  });
}



