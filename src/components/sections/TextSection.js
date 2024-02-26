
import { storyblokEditable } from "@storyblok/react/rsc";
import SmallWidth from "../../components/layouts/SmallWidth";
import H2 from "../typography/H2";
import Text from "../typography/Text";

export default function TextSection({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-white dark:bg-gray-900 py-24"
    >
      <SmallWidth>
        <H2>{blok?.title}</H2>
        <Text>
          <Text>
            {blok?.text &&
              blok.text.content &&
              blok.text.content.length > 0 &&
              blok.text.content
                .map((item) => {
                  if (item.type === "paragraph" && item.content[0]?.text) {
                    return item.content[0].text;
                  }
                  return null;
                })
                .filter((text) => text !== null)}
          </Text>
        </Text>
      </SmallWidth>
    </section>
  );
}
