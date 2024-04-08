import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionTextDateDownloadItem = ({ blok }) => {
    return (
        <tr
            {...storyblokEditable(blok)}
            className="text-xs text-black whitespace-nowrap bg-white border-b dark:bg-black dark:border-gray-700"
        >
            <td className="px-6 py-4 font-bold">{blok?.title}</td>
            <td className="px-6 py-4 ">{blok?.text_date}</td>
            <td className="px-6 py-4  text-center">
                <a className="text-primary" href={blok?.download_bericht.url}>
                    {blok?.CTA_download_bericht}
                </a>
            </td>
            <td className="px-6 py-4   text-center">
                <a
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
