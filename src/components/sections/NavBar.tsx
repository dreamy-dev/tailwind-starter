"use client";
import ContentWidth from "../layouts/ContentWidth";
import Link from "next/link";
import IconNav from "../elements/IconNav";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 100 },
};

type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: boolean;
  submenuItems?: SubNavItem[];
};

type SubNavItem = {
  title: string;
  href: string;
};

type NavItems = {
  topNav: NavItem[];

};



const navigationMain: NavItems = {
  topNav: [
    { title: "Unternehmen", href: "/unternehmen", icon: false },
    {
      title: "Lösungen",
      href: "/solutions",
      icon: <IconNav></IconNav>,
      submenu: true,
      submenuItems: [
        {
          title: "Schienenfahrzeuge",
          href: "/solutions/schienenfahrzeuge",
        },
        { title: "Signalling", href: "/solutions/signalling" },
        { title: "Service", href: "/solutions/service" },
      ],
    },
    { title: "Karriere", href: "/career", icon: false },
    {
      title: "Investor Relations",
      href: "/investors",
      icon: false,
    },
  ],
};

const NavBar = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const toggleMainMenu = () => {
    setIsOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isSubmenuOpen) {
        const isClickInside = event.target.closest("#navbar-solid-bg") !== null;
        if (!isClickInside) {
          closeSubmenu();
       
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSubmenuOpen]);

 

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 relative">
      <ContentWidth>
        <div className="bg-white col-span-12 w-full flex flex-col items-start justify-center lg:justify-between  lg:flex-row pt-5 pb-12 lg:min-h-fit min-h-[60vh] lg:w-auto left-0 top-[10%] absolut lg:static">
          <div className="hidden lg:block">
            <Link
              href="/"
              className="flex justify-start items-start lg:justify-center lg:items-center mb-10 lg:mb-0 "
            >
              <img src="/logo.svg" className="h-4 sm:h-6" alt="Stadler Logo" />
            </Link>
          </div>

          <div className="w-full lg:w-auto" id="navbar-solid-bg">
            <ul className="mb-10 lg:mb-0 flex flex-col gap-8 lg:gap-0 items-start justify-center  lg:flex-row font-medium mt-4 rounded-lg bg-white  lg:items-center lg:mt-0 md:border-0 lg:bg-transparent">
              {navigationMain.topNav.map((item) => (
                <li key={item.title} className="lg:px-5 ">
                  {item.href == "/solutions" ? (
                    <motion.div
                      onClick={() => {
                        toggleSubmenu();
                        toggleMainMenu();
                     
                      }}
                      className="flex gap-2 justify-center items-center cursor-pointer pr-4 text-primarySolid-800 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {item.title}
                      <svg
                        className="lg:hidden"
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                          fill="#005893"
                        />
                      </svg>
                      <motion.span></motion.span>
                    </motion.div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex gap-2 justify-center items-start pr-4 text-primarySolid-800 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {item.title}
                    </Link>
                  )}

                  {item.submenu && item.submenuItems && (
                    <motion.div
                      initial={"closed"}
                      animate={isOpen ? "open" : "closed"}
                      variants={variants}
                      style={{
                        position: "absolute",
                        zIndex: "9",
                        padding: "10px",
                        width: "100%",
                        left: "0",
                        top: "80px",
                      }}
                      className="bg-white h-screen lg:h-auto lg:bg-greySolid-50"
                    >
                      <ContentWidth>
                        <div className="grid col-span-6 lg:col-start-5 grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:p-8">
                          <div className="border-b lg:border-none  lg:hidden">
                            <Link
                              href="#"
                              onClick={() => {
                                closeSubmenu();
                                toggleMainMenu();
                              }}
                              className="text-primarySolid-600 mb-6 ml-[-20px] flex flex-row gap-2 items-center justify-start content-center whitespace-nowrap"
                            >
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                                  fill="#005893"
                                />
                              </svg>
                              Main Menu
                            </Link>
                          </div>
                          <Link
                            href="/solutions"
                            className=" lg:bg-primaryTrans-100 text-primarySolid-600 lg:text-primary px-0 py-4 lg:px-8 lg:py-24 lg:text-center"
                            onClick={() => setIsOpen((isOpen) => !isOpen)}
                          >
                            <p className="lg:text-lg">Übersicht</p>
                            <p className="hidden lg:block lg:font-semibold lg:text-xl">
                              Lösungen
                            </p>
                          </Link>
                          <div className="grid content-center">
                            {item.submenuItems.map((subItem) => (
                              <motion.div key={subItem.title} className="">
                                <Link
                                  href={subItem.href}
                                  className="flex justify-between px-0 py-4 text-base text-primarySolid-600 hover:text-primary"
                                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                                >
                                  <p>{subItem.title}</p>
                                  <span className="hidden lg:block">
                                    <img src="/icons/chevron-right-light.svg" />
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </ContentWidth>
                    </motion.div>
                  )}
                </li>
              ))}

              <li>
                <div className="block pt-6 pl-0 md:pl-12 md:pt-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 18.402L13.2637 11.6657C14.1502 10.4517 14.681 8.96104 14.681 7.34049C14.681 3.28628 11.3947 0 7.34049 0C3.28628 0 0 3.28628 0 7.34049C0 11.3947 3.28628 14.681 7.34049 14.681C8.96104 14.681 10.4517 14.1502 11.6657 13.2637L18.402 20L20 18.402ZM7.34613 12.4111C4.5511 12.4111 2.28119 10.1355 2.28119 7.34613C2.28119 4.55675 4.55674 2.2812 7.34613 2.2812C10.1355 2.2812 12.4111 4.55675 12.4111 7.34613C12.4111 10.1355 10.1355 12.4111 7.34613 12.4111Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </div>
              </li>
            </ul>
            <div className="border-b lg:border-none"></div>
          </div>
        </div>
      </ContentWidth>
    </nav>
  );
}

export default NavBar;