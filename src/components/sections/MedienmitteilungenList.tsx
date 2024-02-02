import ContentWidth from "../layouts/ContentWidth";

import MedienmitteilungenFilters from "./MedienmitteilungenFilters";
import H2 from "../typography/H2";

type MedienmitteilungenCategories = {
  category: string;
};

type MedienmitteilungenItem = {
  text: string;
  link: string;
};
type MedienmitteilungenList = {
  date: string;
  medien: string;
  medienLink: string;
  links: MedienmitteilungenItem[];
  categories: MedienmitteilungenCategories[];
};

type MedienmitteilungenProps = {
  mainTitle?: string;
  medienmitteilungenList: MedienmitteilungenList[];
};

const MedienmitteilungenList: React.FC<MedienmitteilungenProps> = ({
  mainTitle,
  medienmitteilungenList,
}) => {
  return (
    <>
      <section className="bg-white pb-24">
        <ContentWidth>
          <div className="max-w-full col-span-12">
            <div className="text-start mb-12">
              <H2>{mainTitle}</H2>
            </div>
            <MedienmitteilungenFilters />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">
                    Datum
                  </th>
                  <th scope="col" className="px-6 py-3 w-7/12">
                    Medienmitteilung
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    Kategorie
                  </th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    <div className="flex justify-end">Dokumente</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {medienmitteilungenList.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      {item.date}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      <a href={item.medienLink}>{item.medien}</a>
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      {item.categories.map((category, index) => (
                        <span
                          key={index}
                          className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                        >
                          {category.category}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-end">
                        {item.links.map((itemLink, index) => (
                          <a
                            key={index}
                            className="ml-3 pt-2 pb-2 inline-flex"
                            href={itemLink.link}
                          >
                            {itemLink.text}
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentWidth>
      </section>
    </>
  );
};
export default MedienmitteilungenList;
