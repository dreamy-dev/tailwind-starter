import { storyblokEditable } from "@storyblok/react";

interface H2Props {
  children?: any;
  styles?: string;
  resetStyles?: boolean;
  blok?: any;
  text?: string;
}
const H2: React.FC<H2Props> = ({ children, styles, resetStyles, blok }) => {
  const defaultStyles = "";
  const H2Styles = ` ${
    resetStyles ? defaultStyles : "text-4xl font-bold mb-8"
  } ${styles || ""}`;
  return (
    <h2 {...storyblokEditable(blok)} lang="de" className={H2Styles}>
  {children}
    </h2>
  );
};

export default H2;
