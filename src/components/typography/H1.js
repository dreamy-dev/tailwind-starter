import { storyblokEditable} from "@storyblok/react";





export default function H1({ children, styles, resetStyles, blok }) {
  const defaultStyles = "";
  const H1Styles = `text-black font-bold pt-3 mb-12 text-5xl ${
    resetStyles ? defaultStyles : ""
  } ${styles || ""}`;
  return (
    <h1 {...storyblokEditable(blok)} lang="de" className={H1Styles}>
  {/* {blok.text}{children} */}{children}
    </h1>
  );
}
