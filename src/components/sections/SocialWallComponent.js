import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const SocialWallComponent = ({ blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="py-16 antialiased lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12">
                    <H2>{blok?.title}</H2>
                    <iframe
                        src="https://www.juicer.io/api/feeds/stadler_rail/iframe"
                        frameborder="0"
                        width="100%"
                        height="800"
                        style={{ display: 'block' }}
                    ></iframe>
                </div>
            </ContentWidth>
        </section>
    );
};

export default SocialWallComponent;
