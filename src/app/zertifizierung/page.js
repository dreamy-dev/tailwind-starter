"use client";
import { useState } from "react";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import List from "../../components/sections/List";
import ContentWidth from "@/components/layouts/ContentWidth";
const schweizItems = [
  {
    text: "Stadler Rail AG, Stadler Bussnang AG, Stadler Rheintal AG, Stadler Winterthur AG, Stadler Signalling AG",
    iso: "ISO9001, ISO14001, ISO45001",
    href: "/downloadcenter",
  },
  {
    text: "Stadler Bussnang AG",
    iso: "Stadler Bussnang AG",
    href: "/downloadcenter",
  },
];
const deutschlandItems = [
  {
    text: "Stadler Deutschland GmbH, Stadler Chemnitz GmbH, Stadler Mannheim GmbH",
    iso: "ISO9001, ISO14001, ISO50001",
    href: "/downloadcenter",
  },
  {
    text: "Stadler Deutschland GmbH",
    iso: "EN15085",
    href: "/downloadcenter",
  },
];
const spanienItems = [
  {
    text: "Stadler Rail Valencia S.A.U.",
    iso: "ISO9001",
    href: "/downloadcenter",
  },
  {
    text: "Stadler Rail Valencia S.A.U.",
    iso: "ISO14001",
    href: "/downloadcenter",
  },
];
export default function Zertifizierung() {

    type Section = "rollingStock" | "signalling" | "service";

    const initialSectionsState: Record<Section, boolean> = {
      rollingStock: false,
      signalling: false,
      service: false,
    };

        const [sectionsState, setSectionsState] =
          useState(initialSectionsState);
console.log(sectionsState);
        const toggleVisibility = (section: Section) => {
          setSectionsState((prevState: Record<Section, boolean>) => ({
            ...prevState,
            [section]: !prevState[section],
          }));
        };
  return (
    <>
      <ContentWidth>
        <div className="col-span-12 max-w-full z-50">
          <H2>Zertifizierung</H2>
          <div>
            <H3
              styles="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleVisibility("rollingStock")}
            >
              Rolling Stock{" "}
              {sectionsState.rollingStock ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                    fill="#005893"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                    fill="#005893"
                  />
                </svg>
              )}
            </H3>
            {sectionsState.rollingStock && (
              <>
                <List items={schweizItems} listTitle="Schweiz" />
                <List items={deutschlandItems} listTitle="DeutschlandItems" />
                <List items={spanienItems} listTitle="SpanienItems" />
              </>
            )}
          </div>
          <div>
            <H3
              styles="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleVisibility("signalling")}
            >
              Signalling{" "}
              {sectionsState.rollingStock ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                    fill="#005893"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                    fill="#005893"
                  />
                </svg>
              )}
            </H3>
            {sectionsState.signalling && (
              <List items={deutschlandItems} listTitle="Deutschland" />
            )}
          </div>
          <div>
            <H3
              styles="flex items-center gap-2 cursor-pointer"
              onClick={() => toggleVisibility("service")}
            >
              Service{" "}
              {sectionsState.rollingStock ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                    fill="#005893"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                    fill="#005893"
                  />
                </svg>
              )}
            </H3>
            {sectionsState.service && (
              <List items={spanienItems} listTitle="Spanien" />
            )}
          </div>
        </div>
      </ContentWidth>
    </>
  );
}
