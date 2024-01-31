import { storyblokEditable} from "@storyblok/react";

type Props = {
  children?: any;
  styles?: any;
  resetStyles?: boolean;
  blok?: any;
};



export default function H1({ children, styles, resetStyles, blok }: Props) {
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
