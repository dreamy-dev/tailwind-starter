import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import Header from "../../components/sections/Header";
import Footer from "../../components/sections/Footer";

const isDev = "development";
export const revalidate = isDev ? 0 : 3600;

async function fetchData(slug) {
  const sbParams = {
    resolve_links: "url",
    version: "published",
    cv: isDev || isDraft ? Date.now() : undefined,
    resolve_relations: ["global_reference.reference"]
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  console.log(data)
  
  return { story: data.story, breadcrumbs: data.story.content.breadcrumbs };
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/", {
    version: "published",
  });

 const paths = [];
  Object.keys(data.links).forEach((linkKey) => {
 
    if (
      data.links[linkKey].is_folder ||
      data.links[linkKey].slug === "blok-tests"
    ) {
      return;
    }

 
    const slug = data.links[linkKey].slug;
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
      <Header />
      <StoryblokStory story={story}  />
      <Footer />
    </>
  );
}

