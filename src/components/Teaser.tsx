//left as an example

// import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

// type Blok = {
//   body: any[];
// };

// const Page: React.FC<{ blok: Blok }> = ({ blok }) => (
//   <main {...storyblokEditable(blok)} className="text-center mt-4">
//     {blok.body.map((nestedBlok) => (
//       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
//     ))}
//   </main>
// );

// export default Page;

import { storyblokEditable } from "@storyblok/react";
type Blok = {
  body: any[];
  headline: string;
};
const Teaser: React.FC<{ blok: Blok }> = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
