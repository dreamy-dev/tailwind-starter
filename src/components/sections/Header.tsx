"use client"

import React, { useState } from "react";
import NavBar from "./NavBar";
import TopNav from "./TopNav";
import Link from "next/link";
import ContentWidth from "../layouts/ContentWidth";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header
      className={`bg-darkBlue ${isMobileNavOpen ? "mobile-nav-open" : ""}`}
    >
      <ContentWidth>
        <div className="flex justify-between items-center col-span-12 w-full  pt-5 pb-5">
          <div className="lg:hidden">
            <Link
              href="/"
              // className="flex justify-start items-start lg:justify-center lg:items-center mb-10 lg:mb-0"
            >
              <img src="/logo.svg" className="h-4 sm:h-6" alt="Stadler Logo" />
            </Link>
          </div>
          <div className="lg:hidden">
            {isMobileNavOpen ? (
              <img
                src="/icons/times.svg"
                alt="close icon"
                onClick={toggleMobileNav}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/icons/equal.svg"
                alt="burger menu icon"
                onClick={toggleMobileNav}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </ContentWidth>
      <div className="hidden lg:flex flex-col-reverse w-full lg:flex-col">
        <>
          <TopNav />
          <NavBar />
        </>
      </div>
      <div className="flex flex-col-reverse w-full lg:flex-col lg:hidden">
        {isMobileNavOpen && (
          <>
            <TopNav />
            <NavBar />
          </>
        )}
      </div>
    </header>
  );
}
