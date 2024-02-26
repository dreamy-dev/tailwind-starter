
import { storyblokEditable } from "@storyblok/react/rsc";
import SmallWidth from "../../components/layouts/SmallWidth";
import Text from "../typography/Text";

export default function TextSection(blok) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-white dark:bg-gray-900 py-24"
    >
      <SmallWidth>
        {/* <Text>{blok?.text.content.map((item) => item.content[0].text)}</Text> */}
      </SmallWidth>
    </section>
  );
}
