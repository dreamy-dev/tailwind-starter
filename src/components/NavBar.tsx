"use client";
import ContentWidth from "./layouts/ContentWidth";
import Link from "next/link";
import IconNav from "./elements/IconNav";
import { useState } from "react";
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
    { title: "Unternehmen", href: "/unternehmen", icon: false },
  ],
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 relative">
      <ContentWidth>
        <div className="bg-white col-span-12 w-full flex flex-col items-center justify-center md:justify-between lg:justify-between lg:flex-row py-8 md:min-h-fit min-h-[60vh] md:w-auto left-0 top-[10%] absolut md:static">
          <div>
            <Link href="/" className="flex justify-center items-center">
              <img src="/Logo.svg" className="h-4 sm:h-6" alt="Flowbite Logo" />
            </Link>
          </div>

          <div className="w-full lg:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col items-center lg:flex-row font-medium mt-4 rounded-lg bg-white md:flex-row md:items-center md:gap-[4vw] gap-8 md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              {navigationMain.topNav.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex gap-2 justify-center items-center py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onMouseEnter={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    {item.title}
                    {item.icon ?? <IconNav />}
                  </Link>

                  {item.submenu && item.submenuItems && (
                    <motion.ul
                      animate={isOpen ? "open" : "closed"}
                      variants={variants}
                      style={{
                        position: "absolute",
                        zIndex: "2",
                        backgroundColor: "#fff",
                        padding: "10px",
                      }}
                    >
                      {item.submenuItems.map((subItem) => (
                        <motion.li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className="text-primarySolid-600 hover:underline"
                          >
                            {subItem.title}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}

              <li>
                <div className="block pl-0 md:pl-12 ">
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
          </div>
        </div>
      </ContentWidth>
    </nav>
  );
}
