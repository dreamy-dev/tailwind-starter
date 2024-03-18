 
import ContentWidth from "../layouts/ContentWidth";
import { getStoryblokApi, storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import { useState, useEffect } from "react";
import H1 from "../typography/H1";
import Text from "../typography/Text";


function AlleMedienmitteilungen({ blok }) {
  const [medienmitteilungen, setMedienmitteilungen] = useState([]);
  useEffect(() => {
    console.log("blok", blok)
    const getMedienmitteilungen = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: 'medien/medienmitteilungen/',
        is_startpage: false,
        resolve_relations: ["medienmitteilungen.categories"],
        "sort_by": "content.date:desc"
      });
 
      setMedienmitteilungen((prev) => data.stories.map((medienmitteilungen) => {
        console.log("medienmitteilungen", medienmitteilungen)
        medienmitteilungen.content.slug = medienmitteilungen.slug;
        return medienmitteilungen;
      }));
    };
    getMedienmitteilungen();
  }, []);

  const formatDate = (textToFormat) => {
    const date = new Date(textToFormat)
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDay = dd + '.' + mm + '.' + yyyy;

    return formattedDay;
  }

  return (
    <ContentWidth {...storyblokEditable(blok)}>
      <div className="col-span-12 w-full">
        <H1>{blok.title}</H1>
      </div>  
      <div className="col-span-12 w-full pb-24">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/12">Datum</th>
                  <th scope="col" className="px-6 py-3 w-7/12">Medienmitteilung</th>
                  <th scope="col" className="px-6 py-3 w-2/12">Kategorie</th>
                  <th scope="col" className="px-6 py-3 w-2/12">
                    <div className="flex justify-end">Dokumente</div>
                    </th>
                  </tr>
                </thead>
              <tbody>
          { medienmitteilungen[0] && medienmitteilungen.map((medienmitteilung) => (
            <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">{formatDate(medienmitteilung.content.date)}</td>
              <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                <a href={`news/${medienmitteilung.slug}`}>{medienmitteilung.name}</a>
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            {medienmitteilung.content.categories.map((category, index) => (
              <span
                key={index}
                className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
              >
                {category.content.category}
              </span>
            ))}
                 </td>
                  <td className="px-6 py-4 text-primary">
                    <div className="flex justify-end">
            {medienmitteilung.content.downloads_block.map((downloadBlock, index) => (
              downloadBlock.download_grid.map((downloadGrid, index) => (
                <a href={downloadGrid.download_cta.url}
                  key={index}
                  className="ml-3 pt-2 pb-2 inline-flex"
                >
                  {downloadGrid.download_cta_text}
                </a>
              ))
              ))}
                      </div>
                      </td>
           </tr>
          ))}
          </tbody>
              </table>
      </div>
    </ContentWidth>
  );
}

export default AlleMedienmitteilungen;