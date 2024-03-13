import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import React, { useState, useEffect } from 'react';
import HistoryCard from './HistoryCard';

const HistoryWrapper = ({blok}) => {
    const [showCards, setShowCards] = useState();
  
    // Update showCards state based on blok data
    // useEffect(() => {
    //     if (blok?.history_section_wrapper && Array.isArray(blok.history_section_wrapper)) {
    //       // Initially, keep the first section open
    //       const first = showCards[0] === true
    //       setShowCards(first);
    //     }
    //   }, [blok]);

      const toggleCards = () => {
        setShowCards(prevShowCards => !prevShowCards);
      };

  return (
    <div className="relative border-s border-gray-200 dark:border-gray-700">
 
        <div className="mb-6 ms-8">
          <div className="absolute w-3 h-3 bg-gray-200 mt-1.5 -start-1.5 border border-white rounded-full dark:border-gray-900 dark:bg-gray-700"></div>
          <span
           onClick={toggleCards }
            className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 dark:bg-primary-900 dark:text-primary-300 cursor-pointer"
          >
            {blok?.year}
          </span>
          {showCards && (
            <div {...storyblokEditable(blok)} className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-y-12">
              {blok?.history_section_wrapper.map((nestedBlok) => (
                  <StoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok?._uid}
                  />
                ))}
            </div>
     )}
        </div>

    </div>
  );
};

export default HistoryWrapper;
