'use client';
import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionTableItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-primarySolid-50 text-xs uppercase text-black dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {blok?.table.thead.map((th, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="w-1/5 px-6 py-3"
                            >
                                {th.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {blok?.table.tbody.map((tr, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b bg-white dark:border-gray-700 dark:bg-black"
                        >
                            {tr.body.map((td, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {td.value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccordionTableItem;
