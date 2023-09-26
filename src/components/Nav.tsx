"use client";

import Image from "next/image";
import { Button, Tabs, type TabsRef } from "flowbite-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const tabs = [{ label: "Europe" }, { label: "America" }, { label: "Asia" }];

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
            className={
              item === selectedTab
                ? "bg-gray-100 hover:border-transparent text-center md:text-left p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
                : "text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
            }
            onClick={() => setSelectedTab(item)}
            type="button"
            id="tabs-with-card-item-1"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            aria-selected="true"
            role="tab"
            data-tabs-target="#europe"
          >
            <span className="md:flex">
              <svg
                className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
              <span className="md:grow md:ml-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  {item.label}
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  Create a business, whether you’ve got a fresh idea.
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
            <div className="max-w-[1140px] lg:pb-32 relative">
              <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div className="bg-gray-800 rounded-b-lg">
                  <img
                    className="max-w-full h-auto rounded-b-lg"
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2300&q=80"
                    alt=""
                  />
                </div>
              </figure>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* <div
          id="america"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-2"
        >
          <div className="max-w-[1140px] lg:pb-32 relative">
            <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
              <div className="p-1.5 bg-gray-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  className="max-w-full h-auto rounded-[1.25rem]"
                  src="../assets/img/mockups/img11.jpg"
                  alt="Image Description"
                />
              </div>
            </figure>

            <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div className="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24">
                <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]">
                  www.preline.co
                </div>
              </div>

              <div className="bg-gray-800 rounded-b-lg">
                <img
                  className="max-w-full h-auto rounded-b-lg"
                  src="../assets/img/mockups/img10.jpg"
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
        </div>

        <div
          id="tabs-with-card-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-3"
        >
          <div className="max-w-[1140px] lg:pb-32 relative">
            <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
              <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  className="max-w-full h-auto rounded-[1.25rem]"
                  src="../assets/img/mockups/img13.jpg"
                  alt="Image Description"
                />
              </div>
            </figure>

            <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                  www.preline.co
                </div>
              </div>

              <div className="bg-gray-800 rounded-b-lg">
                <img
                  className="max-w-full h-auto rounded-b-lg"
                  src="../assets/img/mockups/img12.jpg"
                  alt="Image Description"
                />
              </div>
            </figure>
          </div>
        </div> */}
      </div>
    </div>
  );
}
