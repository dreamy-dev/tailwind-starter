export default function TableInvestorPublications(props?: any) {

return(
    <div className="max-w-full col-span-12">
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
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      13. 4. 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        {props.name}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        <p>Präsentation</p>
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-end">
                          <a
                            className="ml-3 pt-2 pb-2 inline-flex"
                            href="#"
                          >
                            EN
                          </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    className="bg-white border-b dark:bg-black dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                      13. 4. 2023
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        {props.name}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                    >
                        <p>Präsentation</p>
                    </td>
                    <td className="px-6 py-4 text-primary">
                      <div className="flex justify-end">
                        <a
                            className="ml-3 pt-2 pb-2 inline-flex"
                            href="#"
                          >
                            DE
                          </a>
                          <a
                            className="ml-3 pt-2 pb-2 inline-flex"
                            href="#"
                          >
                            EN
                          </a>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
)
}