import H3 from "./typography/H3";
import H4 from "./typography/H4";
import Button from "./elements/ButtonSecondary";
import ContentWidth from "./layouts/ContentWidth";
const features = [
  {
    name: "Antrieb",
    description: "Diesel / Vollelektrisch ",
  },
  {
    name: "Sitzplätze",
    description: "bis zu 250 Sitzplätze",
  },
  {
    name: "Leistungsaufnahme unter Vollast",
    description: "230 kw/h",
  },
  {
    name: "Sitzplätze",
    description: "bis zu 250 Sitzplätze",
  },
  {
    name: "Leistung",
    description: "1,5 kV / 3 kV / 10 kV",
  },
  {
    name: "Leistungsaufnahme unter Vollast",
    description: "230 kw/h",
  },
  {
    name: "Leistungsaufnahme unter Vollast",
    description: "230 kw/h",
  },
  {
    name: "Sitzplätze",
    description: "bis zu 250 Sitzplätze",
  },
  {
    name: "Leistung",
    description: "1,5 kV / 3 kV / 10 kV ",
  },
];

export default function Specification() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <ContentWidth>
        <div className="col-span-12 max-w-full">
          <div className="mx-auto max-w-2xl mb-16 lg:mx-0">
            <H3 titleH3="Der Beste seiner Klasse"></H3>
            <p className="mt-6 text-lg leading-8 text-lightGray">
              Seit 2004 besteht der FLIRT160 erfolgreich verschiedene
              klimatische Herausforderungen von Afrika bis zum Polarkreis. Es
              ist die leidenschaftliche Hingabe zur höchster Qualität,
              Flexibilität und Effizienz, die den FLIRT160 zu einem der
              erfolgreichsten Regionalzüge seiner Klasse macht.
            </p>
          </div>
          <div className="mb-10">
            <H4 textColor="black" titleH4="Spezifikationen"></H4>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base text-black">{feature.name}</dt>
                <dd className="mt-1 font-bold text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="block text-center mx-auto mt-16 ">
            <Button
              backgroundColorClass="bg-white"
              textColorClass="text-primary"
              borderColorClass="border-primary"
              position="center"
              iconBefore={
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2257 12.6027V14.8206H1.77433V12.6027H0V16.5949H16V12.6027H14.2257Z"
                    fill="#005893"
                  />
                  <path
                    d="M14.2878 7.54142L13.2099 6.13083L8.87164 9.44882V0.625977H7.09731V9.44882L2.75465 6.13083L1.67675 7.54142L7.98447 12.3632L14.2878 7.54142Z"
                    fill="#005893"
                  />
                </svg>
              }
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
