"use client";

export default function Numbers() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-lg gap-12 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
          <div className="flex flex-col items-center justify-start">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">380</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Volumen jährlich
            </dd>
          </div>
          <div className="flex flex-col items-center justify-start">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Erfolgsquote bei Lieferungen
            </dd>
          </div>
          <div className="flex flex-col items-center justify-start">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">25</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Lieferanten weltweit
            </dd>
          </div>
          <div className="flex flex-col items-center justify-start">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">12</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Länder
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
