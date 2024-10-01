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
            const titleArray = blok?.download_presentation.url.split('/');
            const title = titleArray[titleArray.length - 1];
            _paq.push([
                'trackEvent',
                'Investor Relations Publication',
                `${title}`,
            ]);
            // _paq.push([
            //     'trackGoal',
            //     'Goal ID',
            //     `${blok?.title} - ${blok?.download_bericht.url}`
            // ]);
        });

        investorsENreference?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            const titleArray = blok?.download_presentation.url.split('/');
            const title = titleArray[titleArray.length - 1];
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
            className="whitespace-nowrap border-b bg-white text-base text-black last:mb-4 last:border-b-0 dark:border-gray-700 dark:bg-black"
        >
            <td className="px-6 py-4 font-medium">{blok?.title}</td>
            <td className="px-6 py-4">{DateFormatter(blok?.text_date)}</td>
            <td className="px-6 py-4 text-center">
                <a
                    target="_blank"
                    ref={investorsDE}
                    className="text-primary"
                    href={blok?.download_bericht.url}
                    rel="noreferrer"
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
                    rel="noreferrer"
                >
                    {blok?.CTA_download_presentation}
                </a>
            </td>
        </tr>
    );
};

export default AccordionTextDateDownloadItem;
