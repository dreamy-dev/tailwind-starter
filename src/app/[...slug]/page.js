// import { ISbStoriesParams, getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
// import { draftMode } from 'next/headers'


// const isDev = 'development'
// export const revalidate = isDev ? 0 : 3600


// async function fetchData(slug) {
 
//   const sbParams = {

//     version: "published",
//     resolve_relations: global_reference.reference,

//   };

//   const storyblokApi = getStoryblokApi()

//   return storyblokApi.get(`cdn/stories/${slug}`, sbParams)
// }


// export default async function Home({ params }) {
//   const slug = params?.slug ? params.slug.join("/") : "blok-tests";

//   const { data } = await fetchData(slug)

//   return (
//     <>
   
//       <StoryblokStory story={data.story} />

//     </>
//   )
// }


  import {
    getStoryblokApi,
  } from "@storyblok/react/rsc";
  import StoryblokStory from "@storyblok/react/story";
  
export const dynamicParams = true;
  
  export default async function Home({params}) {
    let slug = params.slug ? params.slug.join("/") : "blok-tests";

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {version: 'published', cv: Math.random(), resolve_relations: ['global-contact-section']});
  
    return (
      <div>
        <StoryblokStory story={data.story} bridgeOptions={{resolveRelations: ['global-contact-section']}} />
      </div>
    );
  }
  

  export async function generateStaticParams() {

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get("cdn/links/" ,{
        version: 'published'
    });
    let paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder) {
        return;
        }
        const slug = data.links[linkKey].slug;
        
        if(slug == 'blok-tests'){
            return
        }

        let splittedSlug = slug.split("/");
    
        paths.push({ slug: splittedSlug });
    });
    return paths

  }
