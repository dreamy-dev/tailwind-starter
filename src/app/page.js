// import { getStoryblokApi } from "@storyblok/react/rsc";
// import StoryblokStory from "@storyblok/react/story";

// export default async function Home() {
  
//   const { data } = await fetchData();

//   return (
//     <div>
//       <StoryblokStory story={data.story} />
//     </div>
//   );
// }

// export async function fetchData() {
//   let slug = "blok-tests";
//   let sbParams = { version: "published" };

//   const storyblokApi = getStoryblokApi();
//   return await storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
//     cache: "no-store",
//   });
// }


import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
     
      <Layout>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let slug = "blok-tests";
  let sbParams = {
    version: "published", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

