import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';

const HomeSolutionsDoublePageTeaser = ({ blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="pb-5 lg:pb-24"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full mx-auto">
                    <div className="mb-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 md:gap-20 lg:gap-y-40">
                        <li>
                            <img src={blok?.image_1.filename} alt="Image" />

                            <a
                                href={blok?.link_1}
                                className="flex items-center text-white gap-2 text-2xl font-bold mt-4"
                            >
                                {blok?.text_1}
                                <div className="w-6 h-6">
                                    <svg className='w-4 h-4'
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <img src={blok?.image_2.filename} alt="Image" />
                            <a
                                href={blok?.link_2}
                                className="flex items-center text-white gap-2 text-2xl font-bold mt-4"
                            >
                                {blok?.text_2}
                                <div className="w-6 h-6">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </ContentWidth>
        </section>
    );
};

export default HomeSolutionsDoublePageTeaser;
