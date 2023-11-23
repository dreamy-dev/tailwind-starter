import DoubleCard from "../DoubleCard";
import ContentWidth from "../layouts/ContentWidth";
import FullWidth from "../layouts/FullWidth";
import TeaserMobilitySolutions from "../TeaserMobilitySolutions";
import H3 from "../typography/H3";
import Text from "../typography/Text";

const tabs = {
  categories: [
    { title: "Mainline" },
    {
      title: "Urban",
    },
    { title: "Locomotives" },
    {
      title: "Tailor Made",
    },
  ],
};

const TrainCarousel = (props?: any) => {
  return (
    <section className="bg-stadlergradient">
      <TeaserMobilitySolutions></TeaserMobilitySolutions>
      <ContentWidth>
        <div className="col-span-6 text-white">
          <H3>Schienenfahrzeuge</H3>
          <Text>
            Höchste Qualität und Zuverlässigkeit sind bei unseren
            Schienenfahrzeugen Standard. Alles andere wird projekt-spezifisch
            massgeschneidert.
          </Text>
        </div>
      </ContentWidth>
      <FullWidth>
        <img src="/trains.png" className="col-span-12" />
      </FullWidth>
      <ContentWidth>
        <div className="col-span-8 col-start-3 col-end-11 grid grid-cols-4">
          {tabs.categories.map((item) => (
            <div
              key="h"
              className="text-greyBrighten-600 font-semibold text-center flex flex-col items-center"
            >
              <p>{item.title}</p>
              <img className="w-4 mt-2" src="/plus-light.svg" />
            </div>
          ))}
        </div>
      </ContentWidth>
      <DoubleCard />
    </section>
  );
};

export default TrainCarousel;
