"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const tabs = [
    {
      label: "Max Müller",
      quote:
        "Dank Stadler konnte ich eine Ausbildung in einem Bereich abschliessen der mich wirklich fasziniert.",
      job: "Lernender Automatiker",
      img: "https://www.stadlerrail.com/media/img/c/produktionsmechaniker_lernende.jpg",
    },
    {
      label: "Jessica Steiner",
      quote: "Bei Stadler arbeiten macht Spass.",
      job: "Konstrukteur",
      img: "https://www.stadlerrail.com/media/img/c/softwareentwickler_berufserfahrene.jpg",
    },
    {
      label: "Michael Frei",
      quote:
        "Die Arbeit ist sehr spannend, weil man dazu beiträgt wortwörtlich die ganze Welt zu bewegen",
      job: "Schreiner",
      img: "https://www.stadlerrail.com/media/img/c/schreiner_berufserfahrene.jpg",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <nav
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4"
        aria-label="Tabs"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        {tabs.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelectedTab(item)}
            className={`${
              selectedTab.label == item.label ? "bg-gray-100" : " "
            } text-center md:text-left p-3 md:p-5 rounded-xl`}
            type="button"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            aria-selected="true"
            role="tab"
            data-tabs-target="#europe"
          >
            <span className="md:flex">
              <img
                className="w-16 h-16 rounded object-cover"
                src={item.img}
                alt="profile picture"
              />
              <span className="md:grow md:ml-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  {item.label}
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  {item.job}
                </span>
              </span>
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-12 md:mt-16" id="myTabContent">
        <AnimatePresence mode="wait">
          <motion.div
            id="europe"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-1"
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-[1140px] lg:pb-12 relative">
              <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div className="bg-white rounded-b-lg">
                  <p>{selectedTab.quote}</p>
                </div>
              </figure>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
