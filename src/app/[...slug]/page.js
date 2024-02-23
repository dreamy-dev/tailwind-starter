import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { resolve } from 'styled-jsx/css'



const isDev = 'development'
export const revalidate = isDev ? 0 : 3600


async function fetchData(slug) {
 
  const sbParams = {
    //resolve_links: 'url',
    version: "public",
    resolve_relations: ["global-contact-section"],
  };

  const storyblokApi = getStoryblokApi()

  return storyblokApi.get(`cdn/stories/${slug}`, sbParams
 )
}

// export async function generateMetadata({ params }) {
//   const slug = params?.slug ? params.slug.join("/") : "blok-tests";
//   const { story } = await fetchData(slug);

//   if (!story) {
//     return {};
//   }

//   const title = story.content?.seo?.title || story.name;
//   const description = story.content?.seo?.description;
//   return {
//     metadataBase: new URL("https://stadler.ch"),
//     title: `${title} · Stadler`,
//     description: description,
//     robots: {
//       index: true,
//       follow: true,
//     },
//     openGraph: {
//       title: title,
//       description: description,
//       url: `/${story.slug}`,
//     },
//   };
//}

export default async function Home({ params }) {
  const slug = params?.slug ? params.slug.join("/") : "blok-tests";

  const { data } = await fetchData(slug)

  return (
    <>
      <StoryblokStory
        story={data.story}
        bridgeOptions={{ resolveRelations: ["global-contact-section"] }}
      />
    </>
  );
}
