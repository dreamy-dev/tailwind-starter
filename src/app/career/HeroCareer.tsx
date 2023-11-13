"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonPrimary from "../../components/elements/ButtonPrimary";
import H1 from "../../components/typography/H1";

export default function CareerHero() {
  return (
    <section className="bg-[url('/career1.jpg')] bg-no-repeat bg-cover bg-left bg-gray-400 bg-blend-multiply">
      <div className="relative py-24 px-4 mx-auto max-w-screen-xl text-white lg:pt-64 lg:pb-12 xl:px-0 z-1">
        <div className="mb-6 max-w-screen-md lg:mb-0">
          <br />
          <br />
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
            Wir bewegen die Welt jeden Tag
          </h1>
          <p className="my-8 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            Join us on our mission to help millions of people to reach their
            destination
          </p>
        </div>
        <form
          action="#"
          className="grid gap-y-4 p-4 mt-8 w-full bg-white rounded lg:gap-x-4 lg:grid-cols-6 lg:mt-9 dark:bg-gray-800"
        >
          <div className="grid grid-cols-1 gap-x-4 lg:col-span-3">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="end"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Job"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <label className="sr-only">Location</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="location-form"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Land"
              />
            </div>
          </div>
          <ButtonPrimary position="center" buttonText="Suchen" />
        </form>
        <br />
        <br />
      </div>
    </section>
  );
}
