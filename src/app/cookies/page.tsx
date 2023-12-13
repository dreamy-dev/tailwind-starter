"use client";

import Table from "@/components/sections/Table";
import H2 from "@/components/typography/H2";
import ContentWidth from "@/components/layouts/ContentWidth";
import Text from "@/components/typography/Text";

const customTableHeaders = [
  {
    name: "Name",
  },
  {
    name: "Anbieter",
  },
  {
    name: "Zweck",
  },
  {
    name: "Ablauf",
  },
  {
    name: "Typ",
  },
];

const customTableData = [
  {
    name: "CookieConsent",
    link: "#",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ablauf: "2 Jahre",
    typ: "HTTP Cookie",
  },
  {
    name: "CookieConsent",
    link: "#",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ablauf: "2 Jahre",
    typ: "HTTP Cookie",
  },
  {
    name: "CookieConsent",
    link: "#",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ablauf: "2 Jahre",
    typ: "HTTP Cookie",
  },
  {
    name: "CookieConsent",
    link: "#",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ablauf: "2 Jahre",
    typ: "HTTP Cookie",
  },
  {
    name: "CookieConsent",
    link: "#",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ablauf: "2 Jahre",
    typ: "HTTP Cookie",
  },
];

export default function Cookies() {
 

  return (
    <>
      <ContentWidth>
        <div className="col-span-12 max-w-full">
          <H2>Cookies</H2>
          <div className="mb-20">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </div>
          <Table
            mainText="Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne diese Cookies nicht richtig funktionieren. "
            title="Notwendig (7) "
            tableHeaders={customTableHeaders}
            tableData={customTableData}
          />
          <Table
            mainText="Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne diese Cookies nicht richtig funktionieren. "
            title="Statistiken (2)"
            tableHeaders={customTableHeaders}
            tableData={customTableData}
          />
          <Table
            mainText="Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne diese Cookies nicht richtig funktionieren. "
            title="Marketing (31)"
            tableHeaders={customTableHeaders}
            tableData={customTableData}
          />
        </div>
      </ContentWidth>
    </>
  );
}
