import React from "react";


export default function CardSimple() {
  return (
    <div
      className="max-w-sm
      bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        alt="Meaningful alt text for an image that is not purely decorative"
        src="/Card.jpg"
      />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Noteworthy technology acquisitions 2021</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </span>
        </p>
      </div>
    </div>
  );
}
