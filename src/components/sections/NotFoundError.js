import ButtonPrimary from '@/src/components/elements/ButtonPrimary';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import RichTextRenderer from '../../components/helpers/RichTextRenderer';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const NotFoundError = ({ blok }) => {
    return (
        <section
            className="bg-white dark:bg-gray-900 py-28 h-full"
            {...storyblokEditable(blok)}
        >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary">
                        404
                    </h1>
                    <RichTextRenderer
                        text={blok?.error_message}
                    ></RichTextRenderer>
                    <div className="flex justify-center mt-10">
                        <ButtonPrimary
                            href={ButtonUrlRenderer(blok?.cta_url)}
                            position="center"
                            buttonText={blok.cta_text}
                        ></ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default NotFoundError;
