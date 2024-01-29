"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import H2 from "@/components/typography/H2";
import ContentWidth from "@/components/layouts/ContentWidth";

export default function TabsPublikationen() {
  const tabs = [
    {
      label: "2023",
      publication: "Lernender Automatiker",
    },
    {
      label: "2022",
      publication: "Lorem ipsum",
    },
    {
      label: "2021",
      publication: "Schreiner",
    },
    {
        label: "2020",
        publication: "Schreiner",
    },
    {
        label: "2019",
        publication: "Schreiner",
    },
    {
        label: "2018",
        publication: "Schreiner",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <ContentWidth>
        <div className="mt-20 col-span-12 max-w-full">
            <H2>Alle Publikationen nach Jahr</H2>
      <nav
        className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-4"
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
            } p-3 text-center md:p-5 md:text-left`}
            type="button"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            aria-selected="true"
            role="tab"
            data-tabs-target="#europe"
          >
            <span className="md:flex">
              <span className="md:ml-5 md:grow">
                <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block font-semibold text-gray-800 dark:text-gray-200">
                  {item.label}
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
            <div className="relative max-w-[1140px] lg:pb-12">
              <figure className="relative z-[1] ml-auto mr-20 h-auto w-[50rem] max-w-full rounded-b-lg">
                <div className="rounded-b-lg bg-white">
                    <p className="text-xl font-medium leading-relaxed text-gray-900 dark:text-white">
                      {selectedTab.publication}
                    </p>
                </div>
              </figure>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </ContentWidth>
  );
}
