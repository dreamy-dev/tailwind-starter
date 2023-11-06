import ContentWidth from "./layouts/ContentWidth";
const navigation = {
  topNav: [
    { name: "Medien", href: "#" },
    { name: "Zulieferer", href: "#" },
    { name: "Kunden", href: "#" },
    { name: "Downloadcenter", href: "#" },
  ],
};

export default function TopNav() {
  return (
    <section className="bg-primary">
      <ContentWidth>
        <div className="col-span-12 lg:flex lg:items-center justify-end">
          <div className="py-2 lg:flex lg:items-center  gap-6">
            <ul
              role="list"
              className="lg:flex lg:items-end lg:justify-between  gap-4"
            >
              {navigation.topNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-white hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="lg:flex lg:items-center   gap-4">
              <li className="lg:flex lg:items-center   gap-2">
                <img src="/icons/country.svg" alt="Country Icon" />
                <a
                  className="text-sm leading-6 text-white hover:text-white"
                  href="#"
                >
                  Schweiz
                </a>
              </li>
              <li className="lg:flex lg:items-center  gap-2">
                <img src="/icons/country-name.svg" alt="Language Icon" />
                <a
                  className="text-sm leading-6 text-white hover:text-white"
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
