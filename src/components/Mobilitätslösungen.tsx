import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import SmallWidth from "./layouts/SmallWidth";
import Button from "./elements/ButtonSecondary";

export default function Mobilitat(props?: any) {
  return (
    <section className="bg-stadlergradient pt-24 pb-12 dark:bg-gray-900 ">
      <SmallWidth>
        <div className="max-w-4xl mx-auto">
          <H2
            titleH2="Die Mobilitätslösungen von Stadler stehen für hohe Effizienz und Zuverlässigkeit"
            styles="text-center text-white"
          ></H2>
          <Text styles="my-8 text-center text-white">
            Stadler entwickelt die besten Schienenfahrzeuge der Welt. Diese
            werden mit massgeschneiderten Lösungen im Bereich Signaltechnik und
            einem integrierten Service-Konzept komplementiert.
          </Text>
          <Button
            position="center"
            textColorClass="text-white"
            styles="mb-12"
            iconAfter={
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4995_6662)">
                  <path
                    d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4995_6662">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            Zu den Lösungen
          </Button>
        </div>
        <div className="mb-10 tracking-tight dark:text-white border border-solid border-greyBrighten"></div>
      </SmallWidth>
    </section>
  );
}
