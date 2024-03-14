
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import H2 from "../../components/typography/H2";
import ContentWidth from "../../components/layouts/ContentWidth";


const History = ({ blok}) => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased sm:py-16 lg:py-24">
      <ContentWidth>
        <div className="col-span-12"{...storyblokEditable(blok)}>
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <H2>{blok?.title}</H2>
          </div>
          {blok?.history_block.map((nestedBlok) => (
                  <StoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok?._uid}
                  />
                ))}
        </div>
      </ContentWidth>
    </section>
  );
};

export default History;