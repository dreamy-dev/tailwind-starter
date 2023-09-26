"use client";

import Image from "next/image";
import { Button, Tabs, type TabsRef } from "flowbite-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavTwo() {
  const tabs = [{ label: "Europe" }, { label: "America" }, { label: "Asia" }];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section>
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
}
