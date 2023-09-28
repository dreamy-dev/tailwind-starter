export default function FormSubscribe() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 ">
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primaryDarkBlue sm:text-6xl text-center">
            Subscribe to the latest news.
          </h1>
          <p className="mt-6 text-lg leading-8 text-primaryDarkBlue text-center">
            We put reliability, flexibility and innovation into practice – and
            have done so since 1942.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryDarkBlue focus:border-primaryDarkBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryDarkBlue dark:focus:border-primaryDarkBlue"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryDarkBlue focus:border-primaryDarkBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryDarkBlue dark:focus:border-primaryDarkBlue"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primaryDarkBlue dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree to the all Terms and Conditions.
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-primaryDarkBlue hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-primaryDarkBlue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
