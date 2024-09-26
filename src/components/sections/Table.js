'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

const TableGrid = ({ blok }) => {
    return (
        <section
            className="bg-white py-16 lg:py-24"
            {...storyblokEditable(blok)}
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full">
                    <div className="mb-8 text-start">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="mb-8 text-start">
                        <Text>{blok?.text}</Text>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                            <thead className="bg-primarySolid-50 text-xs uppercase text-black dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {blok?.table.thead.map((th, index) => (
                                        <th
                                            key={index}
                                            scope="col"
                                            className="w-1/5 whitespace-nowrap px-6 py-3"
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
                                            <td
                                                key={colIndex}
                                                className="px-6 py-4"
                                            >
                                                {td.value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};
export default TableGrid;
