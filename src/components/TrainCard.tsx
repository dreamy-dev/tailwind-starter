import Link from "next/link";
import H3 from "./typography/H3";
import React, { useState } from "react";

const trains = [
  {
    name: "Hybrider FLIRT 160 für Flughafen'Transit",
    image: "/train-c.jpg",
  },
  {
    name: "Ein vollelektrischer FLIRT ywischen DE und NL",
    image: "/train-c.jpg",
  },
  {
    name: "Zwischen Couda und Alphen: Ein elektrischer Niederflur-FLIRT",
    image: "/train-c.jpg",
  },
];

const TrainCard = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className="relative">
        {/* <button
          className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5"
          onClick={toggleDropdown}
        >
          <a href="#">
            <img className="" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div>
            <a href="#">
              <H3>{trains[0].name}</H3>
            </a>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4995_6662)">
                  <path
                    d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                    fill="#005893"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4995_6662">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </button> */}
        {dropdownVisible && (
          <div className="flex flex-wrap absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            {trains.map((train, idx) => (
              <div
                key={idx}
                className="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className=""
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <H3>{train.name}</H3>
                  </a>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4995_6662)">
                        <path
                          d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                          fill="#005893"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4995_6662">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default TrainCard;
