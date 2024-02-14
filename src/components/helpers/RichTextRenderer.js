import { render } from "storyblok-rich-text-react-renderer-ts";
import { StoryblokComponent } from "@storyblok/react/rsc";



const RichTextRenderer = ({ text }) => {
  return (
    <>
      {render(text, {
        defaultBlokResolver: (name, props) => (
          <StoryblokComponent blok={{ component: name, ...props }} />
        ),
      })}
    </>
  );
};

export default RichTextRenderer;
