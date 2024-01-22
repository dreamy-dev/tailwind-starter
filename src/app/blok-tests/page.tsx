// import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

// type Blok = {
//   body: any[];
// };

// const Page: React.FC<{ blok: Blok }> = ({ blok }) => (
//   <main {...storyblokEditable(blok)}>
//     {blok.body.map((nestedBlok) => (
//       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
//     ))}
//   </main>
// );

// export default Page;
//  import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
//  import StoryblokStory from "@storyblok/react";

//  type sbParams = {
//    version: string;
//  };
// export default async function Page() {
//   const { data } = await fetchData();

//   return (
//     <div>
//       {/* <StoryblokStory story={data.story} /> */}
//     </div>
//   );
// }

// export async function fetchData() {
//   let sbParams = { version: "draft" };

//   const storyblokApi = getStoryblokApi();
//   return storyblokApi.get(`cdn/stories/bloks-tests`, sbParams);
// }
