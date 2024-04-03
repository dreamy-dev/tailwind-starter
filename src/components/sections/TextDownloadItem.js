import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';

const TextDownloadItem = ({ blok }) => {
    return (
          
            <ul {...storyblokEditable(blok)}>
                <li className=" my-4 text-xl flex justify-between items-center">
                    <p className="w-10/12">{blok?.title}</p>
                    {blok?.download_items?.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </li>
                <div className="border-b mb-6"></div>
            </ul>
     
    );
};

export default TextDownloadItem;
