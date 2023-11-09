"use client";
import ContentWidth from "./layouts/ContentWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
      <ContentWidth>
        <div className="col-span-12 max-w-full flex items-center justify-between py-4">
          <Link href="#" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stadler_Rail_logotype.svg/2560px-Stadler_Rail_logotype.svg.png"
              className="mr-1 h-4 sm:h-6"
              alt="Flowbite Logo"
            />
          </Link>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600  rounded md:bg-transparent md:p-0  dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/medien"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/zulieferer"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Supplier
                </Link>
              </li>
              <li>
                <Link
                  href="/full-service"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Full Service
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/lieferanten"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Lieferanten
                </Link>
              </li>
              <li>
                <Link
                  href="/unternehmen"
                  className="block py-2 pl-3 pr-4 text-primarySolid-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Unternehmen
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
        </div>
      </ContentWidth>
    </nav>
  );
}
