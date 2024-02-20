"use client";

import { storyblokEditable } from "@storyblok/react/rsc";

const ServiceTeaserItem = ({

imageStyles,
blok
}) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mx-auto"
    >
      <a href={blok.link.url}>
        <img className="w-24 pl-5 pt-5" src={blok?.Icon.filename} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blok?.title}
          </h5>
          <p>{blok?.text}</p>
        </div>
      </a>
    </div>
  );
};

export default ServiceTeaserItem;
