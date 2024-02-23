import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'

const isDev = "development";
export const revalidate = isDev ? 0 : 3600;

async function fetchData(slug) {
  const sbParams = {
    resolve_links: "url",
    version: "published",
    cv: isDev || isDraft ? Date.now() : undefined,
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return { story: data.story };
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/", {
    version: "published",
  });

  const paths = [];
  data.links.forEach((link) => {
    if (!link.slug || link.is_folder || link.slug === "blok-tests") {
      return;
    }

    const slug = link.slug;
    let splittedSlug = slug.split("/");

    paths.push({ slug: splittedSlug });
  });

  return paths;
}

export default async function Home({ params }) {
  const slug = params?.slug ? params.slug.join("/") : "blok-tests";
  const { story } = await fetchData(slug);

  if (!story) {
    return notFound();
  }

  return (
    <>
      <StoryblokStory story={story} />
    </>
  );
}



// const isDev = 'development'
// export const revalidate = isDev ? 0 : 3600


// async function fetchData(slug) {
 
//   const sbParams = {
//     resolve_links: 'url',
//     version: "public",
   
//   };

//   const storyblokApi = getStoryblokApi()

//   return storyblokApi.get(`cdn/stories/${slug}`, sbParams
//   )
  
// }

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

// export default async function Home({ params }) {
//   const slug = params?.slug ? params.slug.join("/") : "blok-tests";

//   const { data } = await fetchData(slug)

//   return (
//     <>
//       <StoryblokStory
//         story={data.story}
//       />
//     </>
//   );
// }
