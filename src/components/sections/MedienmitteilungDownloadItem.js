import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';


const MedienmitteilungDownloadItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
                <ul className="col-span-12">
                    <div>
                        <li className=" my-4 text-xl flex justify-between items-center">
                            <p className="w-10/12">{blok?.title}</p>
                            {blok.downloads.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </li>
                        <div className="border-b mb-6"></div>
                    </div>
                </ul>
         
        </div>
    );
};

export default MedienmitteilungDownloadItem;
