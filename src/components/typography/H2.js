import { storyblokEditable } from "@storyblok/react";


const H2 = ({ children, styles, resetStyles, blok }) => {
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
