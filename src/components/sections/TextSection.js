import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../../components/layouts/SmallWidth';
import RichTextRenderer from '../helpers/RichTextRenderer';

export default function TextSection({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white dark:bg-gray-900 py-16 lg:py-24"
        >
            <SmallWidth>
                <RichTextRenderer text={blok.text} />
            </SmallWidth>
        </section>
    );
}
