import { motion } from "framer-motion";
import { useState } from "react";
import DoubleCard from "./DoubleCard";
import ContentWidth from "../layouts/ContentWidth";
import FullWidth from "../layouts/FullWidth";
import TeaserMobilitySolutions from "./TeaserMobilitySolutions";
import H3 from "../typography/H3";
import Text from "../typography/Text";

const tabs = {
  categories: [
    {
      title: "Mainline",
      trains: [
        {
          img: "train-models/mainline/smile.jpeg",
          category: "Highspeed",
          name: "Smile",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/mainline/flirt200.jpeg",
          category: "Intercity",
          name: "Flirt 200",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/mainline/kiss200.jpeg",
          category: "Intercity",
          name: "Kiss 200",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/mainline/flirt160.jpeg",
          category: "Regional",
          name: "Flirt 160",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/mainline/kiss160.jpeg",
          category: "Regional",
          name: "Kiss 160",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/mainline/wink.jpeg",
          category: "Regional",
          name: "Wink",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/mainline/gtw.jpeg",
          category: "Regional",
          name: "GTW",
          href: "/solutions/schienenfahrzeuge/product",
        },
      ],
    },
    {
      title: "Urban",
      trains: [
        {
          img: "train-models/urban/tina.jpeg",
          category: "Highspeed",
          name: "Tina",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/urban/tango.jpeg",
          category: "Intercity",
          name: "Tango",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/urban/tramlink.jpeg",
          category: "Tram",
          name: "Tramlink",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/urban/variobahn.jpeg",
          category: "Regional",
          name: "Variobahn",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/urban/metelitsa.jpeg",
          category: "Regional",
          name: "Metelitsa",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/urban/citylink.jpeg",
          category: "Regional",
          name: "Citylink",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/urban/metro.jpeg",
          category: "Regional",
          name: "Metro",
          href: "/solutions/schienenfahrzeuge/product",
        },
      ],
    },
    {
      title: "Locomotives",
      trains: [
        {
          img: "train-models/locomotive/euro9000.jpeg",
          category: "Highspeed",
          name: "EURO9000",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/locomotive/eurodual.jpeg",
          category: "EURODUAL",
          name: "Smile",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/locomotive/euro6000.jpeg",
          category: "Highspeed",
          name: "EURO6000",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/locomotive/euro4001.jpeg",
          category: "Highspeed",
          name: "EURO4001",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/locomotive/eurolight.jpeg",
          category: "Highspeed",
          name: "EUROLIGHT",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/locomotive/sali.jpeg",
          category: "Highspeed",
          name: "SALI",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/locomotive/central-cab.jpeg",
          category: "Highspeed",
          name: "Central Cab",
          href: "/solutions/schienenfahrzeuge/product",
        },
      ],
    },
    {
      title: "Tailor Made",
      trains: [
        {
          img: "train-models/tailormade/triebzug.jpeg",
          category: "Highspeed",
          name: "Triebzüge",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/tailormade/zahnradbahn.jpeg",
          category: "Highspeed",
          name: "Zahnradbahnen",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/tailormade/schlafwagen.jpeg",
          category: "Highspeed",
          name: "Schlafwagen",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "train-models/tailormade/rangierlok.jpeg",
          category: "Highspeed",
          name: "Lokomotiven",
          href: "/solutions/schienenfahrzeuge/product",
        },
      ],
    },
  ],
};

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 100 },
};

const plusAnimation = {
  open: { transform: "rotate(45deg)" },
  close: { transform: "rotate(0deg)" },
};

const TrainCarousel = (props?: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs.categories[0]);

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
        <img src="/trains.png" className="col-span-12 w-full" />
      </FullWidth>
      <ContentWidth>
        <div className="col-span-8 col-start-3 col-end-11 grid grid-cols-4 my-6">
          {tabs.categories.map((item) => (
            <div
              key={item.title}
              className="text-greyBrighten-600 font-semibold text-center flex flex-col items-center"
              onClick={() => (
                setIsOpen((isOpen) => !isOpen), setSelectedTab(item)
              )}
            >
              <p>{item.title}</p>
              <motion.img
                className="w-4 mt-2"
                src="/plus-light.svg"
                animate={item === selectedTab && isOpen ? "open" : "close"}
                variants={plusAnimation}
              />
            </div>
          ))}
        </div>
      </ContentWidth>
      <ContentWidth>
        <motion.div
          className="col-span-12 grid grid-cols-4 grid-rows-2 gap-2"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          {tabs.categories.map((category) =>
            category.title == selectedTab.title
              ? category.trains.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white text-black flex flex-col"
                  >
                    <img className="w-full" src={item.img} />
                    <div className="p-6">
                      <small className="text-greySolid-600 flex mb-2">
                        {item.category}
                      </small>
                      <H3>{item.name}</H3>
                    </div>
                  </div>
                ))
              : ""
          )}
          <div className="bg-transparent text-white border-solid border-2 border-white flex flex-col justify-center p-6">
            <small>Übersicht</small>
            <H3>{selectedTab.title}</H3>
          </div>
        </motion.div>
      </ContentWidth>
      <DoubleCard />
    </section>
  );
};

export default TrainCarousel;
