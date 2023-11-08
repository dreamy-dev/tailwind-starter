export default function Contact() {
  return (
    <>
      <section className="py-24 bg-primary-700">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex items-center flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row ">
            <div className="w-1/3">
              <img
                className="w-100 mx-auto w-64 md:flex"
                src="/contact.jpg"
                alt="contact"
              />
            </div>
            <div className="w-2/3">
              <h2 className="mb-6 text-3xl tracking-tight font-extrabold text-white">
                Ihr Ansprechpartner
              </h2>
              <p className="mb-6 font-light md:text-lg text-white">
                Wo andere Probleme sehen, schaffen wir für Sie Lösungen, die
                ökologisch und wirtschaftlich begeistern. Bei uns stehen
                Zuverlässigkeit und höchste Qualität an erster Stelle. Und wir
                denken langfristig. In enger Zusammenarbeit begleiten wir Sie
                mit viel Ambition, damit Sie Ihre hochgesteckten Ziele im
                Bereich Bahn und Mobilität erreichen.
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  +12(3) 456 7890 1234
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  company@name.it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
