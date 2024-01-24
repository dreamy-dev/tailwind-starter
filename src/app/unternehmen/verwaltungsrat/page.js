"use client";

import SmallWidth from "../../../components/layouts/SmallWidth";
import HeroText from "../../../components/sections/HeroText";

export default function Verwaltungsrat() {
  const team = [
    {
      label: "Peter Spuhler",
      job: "Verwaltungsratspräsident",
      img: "https://www.stadlerrail.com/media/img/c/peter-spuhler-2023-2.jpg",
    },
    {
      label: "Hans-Peter Schwald",
      job: "Vizepräsident Verwaltungsrat, Senior Partner in der Anwaltskanzlei BIANCHISCHWALD LLC",
      img: "https://www.stadlerrail.com/media/img/c/schwald-hans-peter-2023.jpg",
    },
    {
      label: "Stefan Asennkerschbaummer",
      job: "Mitglied Verwaltungsrat, Aufsichtsratsvorsitzender der Robert Bosch GmbH",
      img: "https://www.stadlerrail.com/media/img/c/stefan-asenkerschbaumer-2023.jpg",
    },
    {
      label: "Barbara Egger-Jenzer",
      job: "Divisionsleiter Service",
      img: "https://www.stadlerrail.com/media/img/c/barbara-egger-jenzer.jpg",
    },
    {
      label: "Christoph Franz",
      job: "Mitglied Verwaltungsrat, Vizepräsident des Verwaltungsrats Zurich Insurance Group AG",
      img: "https://www.stadlerrail.com/media/img/c/christoph-franz.jpg",
    },
    {
      label: "Wojciech Kostrzewa",
      job: "Mitglied Verwaltungsrat, Präsident & CEO Billon Group Ltd",
      img: "https://www.stadlerrail.com/media/img/c/wojciech-kostrzewa.jpg",
    },
    {
      label: "Doris Leuthard",
      job: "Mitglied Verwaltungsrat, ehemalige Schweizer Bundesrätin",
      img: "https://www.stadlerrail.com/media/img/c/doris-leuthard.jpg",
    },
    {
      label: "Kurt Rüegg",
      job: "Mitglied Verwaltungsrat, Mitinhaber Alantra AG",
      img: "https://www.stadlerrail.com/media/img/c/kurt-ruegg.jpg",
    },
  ];
  return (
    <>
      <HeroText
         breadcrumbs={[
           { text: "Unternehmen", link: "/unternehmen" },
         ]}
        title="Stadler Verwaltungsrat"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
     
      <SmallWidth>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {team.map((item) => (
            <div key={item.label} className="mb-4">
              <img
                className="object-cover object-top w-full h-64 lg:h-96"
                src={item.img}
                alt=""
              />
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                    {item.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SmallWidth>
    </>
  );
}
