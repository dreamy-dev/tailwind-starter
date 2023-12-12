export default function StandorteFilters() {
  return (
    <div className="flex flex-col items-center justify-center pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
      <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
        <li className="mb-4 mr-2 lg:mr-4">
          <select className="inline-block px-4 py-2 text-base border rounded-full block">
            <option selected>Land</option>
            <option value="CH">Schweiz</option>
            <option value="CA">Canada</option>
            <option value="FR">Frankreich</option>
            <option value="DE">Deutschland</option>
          </select>
        </li>

        <li className="mb-4 mr-2 lg:mr-4">
          <a
            href="#"
            className="inline-block px-4 py-2 text-base border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Produktion / Komponenten
          </a>
        </li>
        <li className="mb-4 mr-2 lg:mr-4">
          <a
            href="#"
            className="inline-block px-4 py-2 text-base border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Signaling
          </a>
        </li>
        <li className="mb-4 mr-2 lg:mr-4">
          <a
            href="#"
            className="inline-block px-4 py-2 text-base border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Service
          </a>
        </li>
        <li className="mb-4 mr-2 lg:mr-4">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              className="inline-block px-8 py-2 text-base border rounded-full hover:text-gray-900 hover:bg-gray-100"
              placeholder="Search "
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
