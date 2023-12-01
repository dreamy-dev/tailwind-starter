import ContentWidth from "../layouts/ContentWidth";
import Link from "next/link";
const navigation = {
  topNav: [
    { name: "Medien", href: "/#" },
    { name: "Zulieferer", href: "/#" },
    { name: "Kunden", href: "/#" },
    { name: "Downloadcenter", href: "/#" },
  ],
};

export default function TopNav() {
  return (
    <section className="bg-white">
      <ContentWidth>
        <div className="col-span-12 ">
          <div className="py-2 flex flex-column sm:justify-between lg:justify-end lg:flex-row lg:flex lg:items-center  gap-6">
            <ul
              role="list"
              className=" flex lg:flex flex-col lg:flex-row justify-between lg:justify-end gap-4"
            >
              {navigation.topNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base leading-6 font-medium text-primarySolid-800 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="lg:flex lg:items-center gap-4">
              <li className="lg:flex lg:items-center gap-2">
                <img src="/icons/country.svg" alt="Country Icon" />
                <a
                  className="text-base leading-6 font-medium text-primarySolid-800 hover:text-primary"
                  href="#"
                >
                  Schweiz
                </a>
              </li>
              <li className="lg:flex lg:items-center  gap-2">
                <img src="/icons/country-name.svg" alt="Language Icon" />
                <a
                  className="text-base leading-6  font-medium text-primarySolid-800 hover:text-primary"
                  href="#"
                >
                  DE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
