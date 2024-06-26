import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';

const TextDownloadItem = ({ blok }) => {
    return (
        <ul {...storyblokEditable(blok)}>
            <li className=" my-4 text-xl flex justify-between items-center">
                <p className="w-8/12">{blok?.title}</p>
                <div className="w-4/12 flex-wrap flex justify-end items-center">
                    {blok?.download_items?.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            </li>
            <div className="border-b mb-6"></div>
        </ul>
    );
};

export default TextDownloadItem;
