"use client";

import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";
import Text from "../typography/Text";
import ButtonPrimary from "../elements/ButtonPrimary";

function TeaserDownload() {
  return (
    <section className="bg-white pb-20">
      <ContentWidth>
        <div className="col-span-12 max-w-full flex flex-col justify-left">
          <H2>Medienmitteilungen</H2>
          <Text styles="mb-4">
            05.12.2023 Stadler Prag feiert 15-jähriges Jubiläum und verzeichnet
            starkes Wachstum.
          </Text>
          <Text styles="mb-4">
            09.11.2023 Stadler macht Lokomotiven für das ETCS fit und ermöglicht
            damit schnelleren ETCS-Roll-Out in Deutschland.
          </Text>
          <Text styles="mb-4">
            07.11.2023 Stadler eröffnet neues Logistikzentrum für den
            Schienenverkehr in Berlin Pankow. 
          </Text>
          <Text styles="mb-8">
            31.10.2023 TRAMLINK startet Linienverkehr in Bern.
          </Text>
          <ButtonPrimary position="left" href="/downloadcenter">
            Alle Medienmitteilungen
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5650_6261)">
                <path
                  d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5650_6261">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0.5 0.517578)"
                  />
                </clipPath>
              </defs>
            </svg>
          </ButtonPrimary>
        </div>
      </ContentWidth>
    </section>
  );
}
export default TeaserDownload;