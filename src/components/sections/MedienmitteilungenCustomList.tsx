import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";

type MedienmitteilungenItem = {
  text: string;
  link: string;
};
type MedienmitteilungenList = {
  title: string;
  links: MedienmitteilungenItem[];
};

type MedienmitteilungenCustomProps = {
  mainTitle?: string;
  medienmitteilungenList: MedienmitteilungenList[];
};

const MedienmitteilungenCustomList: React.FC<MedienmitteilungenCustomProps> = ({
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
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                {medienmitteilungenList.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 text-lg font-medium text-black whitespace-nowrap"
                    >
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-end">
                        {item.links.map((itemLink, index) => (
                          <a
                            key={index}
                            className="ml-4 pt-2 text-lg pb-2 inline-flex"
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
export default MedienmitteilungenCustomList;
