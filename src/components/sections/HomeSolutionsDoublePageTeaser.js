import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';

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

                            <div className="pr-0">
                                <a
                                    href={blok?.link_1}
                                    className="flex flex-col items-start gap-2 text-xl font-bold text-white mt-5 mb-5"
                                >
                                    <H2 resetStyles={true} styles="mb-4 text-4xl font-bold">
                                        {blok?.title_1}
                                    </H2>
                                    <Text styles="text-greyBrighten-800 mb-4">
                                        {blok?.text_1}
                                    </Text>
                                    <img
                                        className="w-5 h-5"
                                        src="/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </li>
                        <li>
                            <img src={blok?.image_2.filename} alt="Image" />
                            <div className="pr-0">
                                <a
                                    href={blok?.link_2}
                                    className="flex flex-col items-start gap-2 text-xl font-bold text-white mt-5 mb-5"
                                >
                                    <H2 resetStyles={true} styles="mb-4 text-4xl font-bold">
                                        {blok?.title_2}
                                    </H2>
                                    <Text styles="text-greyBrighten-800 mb-4">
                                        {blok?.text_2}
                                    </Text>
                                    <img
                                        className="w-5 h-5"
                                        src="/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </ContentWidth>
        </section>
    );
};

export default HomeSolutionsDoublePageTeaser;
