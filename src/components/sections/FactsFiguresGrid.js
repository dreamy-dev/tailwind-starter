import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import H2 from "../typography/H2";

import ContentWidth from "../layouts/ContentWidth";

const FactsAndFiguresGrid = ({ blok }) => {
  return (
    <section className="py-24 bg-primarySolid-50">
      <ContentWidth>
        <div className="col-span-12 max-w-full mx-auto">
          <H2 styles="text-center mb-4">{blok.title}</H2>
          <div className="bg-secondaryBgcGray py-8 sm:py-10">
            <div className="mx-auto max-w-full">
              <dl
                className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
                {...storyblokEditable(blok)}
              >
                {/* <div className="mt-8 lg:mt-16"> */}
                {blok.grid_container.map((nestedBlok) => (
                  <StoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok?._uid}
                  />
                ))}
                {/* </div> */}
              </dl>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default FactsAndFiguresGrid;
