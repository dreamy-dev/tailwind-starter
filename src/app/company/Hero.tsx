export default function CompanyHero() {
  return (
    <div>
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/first-image.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-400 w-full object-cover"
        />
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-primaryDarkBlue sm:text-6xl">
              Company
            </h1>
            <p className="mt-6 text-lg leading-8 text-primaryDarkBlue">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="text-lg font-semibold leading-6 text-primaryDarkBlue"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
