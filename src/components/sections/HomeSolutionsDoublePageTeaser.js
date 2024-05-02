import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import { ArrowForward } from '../icons/ArrowForward';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer'

const HomeSolutionsDoublePageTeaser = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)} className="pb-16 lg:pb-24">
            <ContentWidth>
                <div className="col-span-12 max-w-full mx-auto">
                    <div className="mb-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 md:gap-20 lg:gap-y-40">
                        <li>
                            <img src={blok?.image_1.filename} alt="Image" />

                            <div className="pr-0">
                                <a
                                    href={ButtonUrlRenderer(blok?.link_1)}
                                    className="flex flex-col items-start text-xl font-bold text-white mt-5 mb-4 lg:mb-0"
                                >
                                    <div className="text-4xl">
                                        <H2 styles="!mb-0 lg:!mb-2">
                                            {blok?.title_1}
                                        </H2>
                                    </div>
                                    <div className="">
                                        <Text>{blok?.text_1}</Text>
                                    </div>
                                    <ArrowForward styles="w-5 h-5 fill-white" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <img src={blok?.image_2.filename} alt="Image" />
                            <div className="pr-0">
                                <a
                                    href={ButtonUrlRenderer(blok?.link_2)}
                                    className="flex flex-col items-start text-xl font-bold text-white mt-5 mb-0"
                                >
                                    <div className="">
                                        <H2 styles="!mb-0 lg:!mb-2">
                                            {blok?.title_2}
                                        </H2>
                                    </div>
                                    <Text>{blok?.text_2}</Text>
                                    <ArrowForward styles="w-5 h-5 fill-white" />
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
