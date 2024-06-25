import { storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useRef } from 'react';
import DateFormatter from '../helpers/DateFormatter';

const AccordionTextDateDownloadItem = ({ blok }) => {
    const investorsDE = useRef();
    const investorsEN = useRef();

    useEffect(() => {
        let investorsDEreference = investorsDE.current;
        let investorsENreference = investorsEN.current;

        investorsDEreference?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            const titleArray = blok?.download_presentation.url.split('/')
            const title = titleArray[titleArray.length - 1]
            _paq.push([
                'trackEvent',
                'Investor Relations Publication',
                `${blok?.title} - ${title}`,
            ]);
            // _paq.push([
            //     'trackGoal',
            //     'Goal ID',
            //     `${blok?.title} - ${blok?.download_bericht.url}`
            // ]);
        });

        investorsENreference?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            const titleArray = blok?.download_presentation.url.split('/')
            const title = titleArray[titleArray.length - 1]
            _paq.push([
                'trackEvent',
                'Investor Relations Publication',
                `${blok?.title} - ${title}`,
            ]);
        });
    });
    return (
        <tr
            {...storyblokEditable(blok)}
            className="text-xs text-black whitespace-nowrap bg-white border-b last:mb-4 last:border-b-0 dark:bg-black dark:border-gray-700"
        >
            <td className="px-6 py-4 font-bold">{blok?.title}</td>
            <td className="px-6 py-4 ">{DateFormatter(blok?.text_date)}</td>
            <td className="px-6 py-4  text-center">
                <a
                    target="_blank"
                    ref={investorsDE}
                    className="text-primary"
                    href={blok?.download_bericht.url}
                >
                    {blok?.CTA_download_bericht}
                </a>
            </td>
            <td className="px-6 py-4 text-center">
                <a
                    target="_blank"
                    ref={investorsEN}
                    className="text-primary"
                    href={blok?.download_presentation.url}
                >
                    {blok?.CTA_download_presentation}
                </a>
            </td>
        </tr>
        // <div {...storyblokEditable(blok)}>
        //     {/* <ul className="w-full">
        //         <div className="w-full">
        //             <li className=" text-xs flex white-space-nowrap justify-between items-center bg-white border-b dark:bg-black dark:border-gray-700px-6 py-4 font-medium text-black dark:text-white">
        //                 <p className=" px-6 py-3 md:w-3/12 font-bold">
        //                     {blok?.title}
        //                 </p>
        //                 <p className="px-6 py-3 w-full md:w-5/12">
        //                     {blok?.text_date}
        //                 </p>

        //                 <a
        //                     className="text-primary px-6 py-3 w-full md:w-2/12 text-center"
        //                     href={blok?.download_bericht.url}
        //                 >
        //                     {blok?.CTA_download_bericht}
        //                 </a>
        //                 <a
        //                     className="text-primary px-6 py-3 w-full md:w-2/12 text-center"
        //                     href={blok?.download_presentation.url}
        //                 >
        //                     {blok?.CTA_download_presentation}
        //                 </a>
        //             </li>
        //         </div>
        //     </ul> */}

        // </div>
    );
};

export default AccordionTextDateDownloadItem;
