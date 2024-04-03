import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import RichTextRenderer from '../helpers/RichTextRenderer';

const GraphicTextWrapper = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <ContentWidth>
                <div className="col-span-12 py-8 mx-auto lg:py-16">
                    <div>
                        <H2>{blok?.title}</H2>
                        <p className="mx-auto mb-6 font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                            {blok?.lead}
                        </p>
                    </div>
                    <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
                        <div className="flex justify-center">
                            <img
                                className="mr-3 w-6 h-6"
                                src={blok?.step_one_icon.filename}
                                alt="icon-1"
                            />
                            <div>
                                <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                    {blok?.step_one_title}
                                </h3>
                                <div className="richtext font-light text-gray-500 dark:text-gray-400">
                                    <RichTextRenderer
                                        text={blok?.step_one_text}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                className="mr-3 w-6 h-6"
                                src={blok?.step_two_icon.filename}
                                alt="icon-1"
                            />
                            <div>
                                <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                    {blok?.step_two_title}
                                </h3>
                                <div className="richtext font-light text-gray-500 dark:text-gray-400">
                                    <RichTextRenderer
                                        text={blok?.step_two_text}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                className="mr-3 w-6 h-6"
                                src={blok?.step_three_icon.filename}
                                alt="icon-1"
                            />
                            <div>
                                <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                    {blok?.step_three_title}
                                </h3>
                                <div className="richtext font-light text-gray-500 dark:text-gray-400">
                                    <RichTextRenderer
                                        text={blok?.step_three_text}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default GraphicTextWrapper;
