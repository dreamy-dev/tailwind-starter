"use client";

import SmallWidth from "@/components/layouts/SmallWidth";
import HeroText from "@/components/sections/HeroText";

export default function Leitungsteam() {
  const team = [
    {
      label: "Markus Bernsteiner",
      job: "Group CEO",
      img: "https://www.stadlerrail.com/media/img/c/markus-bernsteiner.jpg",
    },
    {
      label: "Ansgar Brockmeyer",
      job: "Divisionsleiter Verkauf & Marketing und Stellvertretender Group CEO",
      img: "https://www.stadlerrail.com/media/img/c/ansgar-brockmeyer.jpg",
    },
    {
      label: "Raphael Widmer",
      job: "Group CFO",
      img: "https://www.stadlerrail.com/media/img/c/raphael-widmer.jpg",
    },
    {
      label: "Daniel Baer",
      job: "Divisionsleiter Service",
      img: "https://www.stadlerrail.com/media/img/c/daniel-baer.jpg",
    },
    {
      label: "Philipp Brunner",
      job: "Divisionsleiter Zentraleuropa",
      img: "https://www.stadlerrail.com/media/img/c/philipp-brunner.jpg",
    },
    {
      label: "Lucius Gerig",
      job: "Divisionsleiter Schweiz",
      img: "https://www.stadlerrail.com/media/img/c/lucius-gerig.jpg",
    },
    {
      label: "Jure Mikolčić",
      job: "Divisionsleiter Deutschland",
      img: "https://www.stadlerrail.com/media/img/c/jure-mikolc%CC%8Cic%CC%81.jpg",
    },
    {
      label: "Iñigo Parra",
      job: "Divisionsleiter Spanien",
      img: "https://www.stadlerrail.com/media/img/c/in%CC%83igo-parra.jpg",
    },
    {
      label: "Benjamin Niederhauser",
      job: "Divisionsleiter Components",
      img: "https://www.stadlerrail.com/media/img/c/f%C3%BCr%20website_niderhauser_1800x1090.jpg",
    },
    {
      label: "Marc Trippel",
      job: "Divisionsleiter Signalling",
      img: "https://www.stadlerrail.com/media/img/c/marc-trippel.jpg",
    },
  ];
  return (
    <>
      <HeroText
         breadcrumbs={[
           { text: "Unternehmen", link: "/unternehmen" }
          ]}
        title="Stadler Konzernleitung"
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
