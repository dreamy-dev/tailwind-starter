import SmallWidth from "../layouts/SmallWidth";
import H2 from "../typography/H2";
export default function Contact(props?: any) {
  return (
    <section className="py-20 bg-stadlergradient">
      <SmallWidth>
        <div className="flex items-center flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row ">
          <div className="w-1/3">
            <img
              className="w-100 mx-auto md:flex"
              src="/contact.jpg"
              alt="contact"
            />
          </div>
          <div className="w-2/3">
            <div className="mb-8 tracking-tight">
              <H2
                titleH2={props.title ?? "Ihr Ansprechspartner"}
                textColor="white"
              ></H2>
            </div>
            <p className="mb-8 font-light md:text-lg text-white">
              Wo andere Probleme sehen, schaffen wir für Sie Lösungen, die
              ökologisch und wirtschaftlich begeistern. Bei uns stehen
              Zuverlässigkeit und höchste Qualität an erster Stelle. Und wir
              denken langfristig.
            </p>
            <ul className="flex-col text-white">
              <li className="mb-2">
                <p>{props.contactname ?? "Max Müller"}</p>
              </li>
              <li className="mb-2">
                <p>{props.contactlevel ?? "Verkaufsleiter Schweiz"}</p>
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
                {props.email ?? "stadler.rail@stadlerrail.com"}
              </li>
            </ul>
          </div>
        </div>
      </SmallWidth>
    </section>
  );
}
