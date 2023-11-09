"use client";
import ContentWidth from "./layouts/ContentWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = {
  topNav: [
    { name: "Medien", href: "/medien" },
    { name: "Zulieferer", href: "/zulieferer" },
    { name: "Kunden", href: "/kunden" },
    { name: "Downloadcenter", href: "/downloadcenter" },
  ],
};

export default function NavBar() {
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 relative">
      <ContentWidth>
        <div className=" bg-white col-span-12 w-full flex flex-col items-center justify-center md:justify-between lg:justify-between  lg:flex-row  py-8  md:min-h-fit min-h-[60vh] md:w-auto left-0 top-[10%] absolut md:static">
          <div>
            <Link href="/" className="flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stadler_Rail_logotype.svg/2560px-Stadler_Rail_logotype.svg.png"
                className=" h-4 sm:h-6"
                alt="Flowbite Logo"
              />
            </Link>
          </div>

          <div className=" w-full  lg:w-auto" id="navbar-solid-bg ">
            <ul
              className="flex flex-col items-center lg:flex-row font-medium mt-4 rounded-lg bg-white 
            md:flex-row md:items-center md:gap-[4vw] gap-8 md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  "
            >
              {/* <li>
                <Link
                  href="/"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600  rounded md:bg-transparent md:p-0  dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li> */}
              <li>
                <Link
                  href="/solutions"
                  className="flex gap-2 justify-center items-center py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Lösungen
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4995_6652)">
                      <path
                        d="M20 8.88889H11.1111V0H8.88889V8.88889H0V11.1111H8.88889V20H11.1111V11.1111H20V8.88889Z"
                        fill="#005893"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4995_6652">
                        <rect width="20" height="20" fill="#005893" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Karriere
                </Link>
              </li>
              <li>
                <Link
                  href="/investor"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Investor Relations
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/company"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Company
                </Link>
              </li> */}

              {/* <li>
                <Link
                  href="/zulieferer"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Supplier
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/full-service"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Full Service
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/product"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Product
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/lieferanten"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Lieferanten
                </Link>
              </li> */}
              <li>
                <Link
                  href="/unternehmen"
                  className="block py-5 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Unternehmen
                </Link>
              </li>
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
