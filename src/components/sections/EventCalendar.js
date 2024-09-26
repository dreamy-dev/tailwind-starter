'use client';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const EventCalendar = ({ mainTitle, eventsData, withoutEventLink }) => {
    return (
        <>
            <section className="bg-white pb-24">
                <ContentWidth>
                    <div className="col-span-12 max-w-full">
                        <div className="text-start">
                            <H2>{mainTitle}</H2>
                        </div>
                        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                            <thead className="bg-primarySolid-50 text-xs uppercase text-black dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="w-1/3 px-6 py-3">
                                        Event
                                    </th>
                                    <th scope="col" className="w-1/3 px-6 py-3">
                                        Date
                                    </th>
                                    {!withoutEventLink && (
                                        <th
                                            scope="col"
                                            className="w-1/3 px-6 py-3"
                                        >
                                            Event ansehen
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {eventsData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b bg-white dark:border-gray-700 dark:bg-black"
                                    >
                                        <th
                                            scope="row"
                                            className="whitespace-nowrap px-6 py-4 font-medium text-black dark:text-white"
                                        >
                                            {item.event}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.date}
                                        </td>
                                        {!withoutEventLink && (
                                            <td className="px-6 py-4 text-primary">
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Event ansehen
                                                </a>
                                            </td>
                                        )}
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
export default EventCalendar;
