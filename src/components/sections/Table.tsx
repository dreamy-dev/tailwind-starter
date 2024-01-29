"use client";


import ContentWidth from "../layouts/ContentWidth";
import H4 from "../typography/H4";
import Text from "../typography/Text";




interface TableProps {
    title: string,
    mainText: string,
  tableHeaders: { name: string }[]
  tableData: { name: string; link: string; text: string, ablauf: string, typ: string }[],
}

const Table: React.FC<TableProps> = ({ title, tableHeaders, tableData, mainText }) => {
  return (
    <section className="bg-white pb-5 lg:pb-24">
      <ContentWidth>
        <div className="max-w-full col-span-12">
          <div className="text-start mb-8">
            <H4>{title}</H4>
          </div>
          <div className="text-start mb-8">
            <Text>{mainText}</Text>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tableHeaders.map((item, index) => (
                  <th key={index} scope="col" className="px-6 py-3 w-1/5">
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-black dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.link}</td>
                  <td className="px-6 py-4 text-primary">
                    <p>{item.text}</p>
                  </td>
                  <td className="px-6 py-4 text-primary">{item.ablauf}</td>
                  <td className="px-6 py-4 text-primary">{item.typ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentWidth>
    </section>
  );
};
export default Table;
