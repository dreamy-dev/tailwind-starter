import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../../components/layouts/SmallWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import Contact from './Contact';

const GlobalReference = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <Contact blok={blok.reference.content} />
        </section>
    );
};

export default GlobalReference;
