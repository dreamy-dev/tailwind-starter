import H3 from "./typography/H3";
import H4 from "./typography/H4";
import Button from "./elements/ButtonSecondary";
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
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-2xl mb-16 lg:mx-0">
          <H3 titleH3="Der Beste seiner Klasse"></H3>
          <p className="mt-6 text-lg leading-8 text-lightGray">
            Seit 2004 besteht der FLIRT160 erfolgreich verschiedene klimatische
            Herausforderungen von Afrika bis zum Polarkreis. Es ist die
            leidenschaftliche Hingabe zur höchster Qualität, Flexibilität und
            Effizienz, die den FLIRT160 zu einem der erfolgreichsten
            Regionalzüge seiner Klasse macht.
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
        <div className="block text-center mt-16 ">
          <Button
            backgroundColor="white"
            textColor="primary"
            borderColor="primary"
          >
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </div>
  );
}
