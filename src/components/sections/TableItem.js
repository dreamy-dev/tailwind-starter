"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const TableItem = ({ blok}) => {
  return (
    <table
      className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      {...storyblokEditable(blok)}
    >
      <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 w-1/5">
            {/* {item.name} */}
          </th>
          {/* <th scope="col" className="px-6 py-3 w-1/5">
            {item.name}
          </th>
          <th scope="col" className="px-6 py-3 w-1/5">
            {item.name}
          </th>
          <th scope="col" className="px-6 py-3 w-1/5">
            {item.name}
          </th>
          <th scope="col" className="px-6 py-3 w-1/5">
            {item.name}
          </th> */}
        </tr>
      </thead>
      <tbody>
        <tr
      
          className="bg-white border-b dark:bg-black dark:border-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
          >
            {/* {item.name} */}
          </th>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4 text-primary">
            <p></p>
          </td>
          <td className="px-6 py-4 text-primary"></td>
          <td className="px-6 py-4 text-primary"></td>
        </tr>
      </tbody>
    </table>
  );
};
export default TableItem;
