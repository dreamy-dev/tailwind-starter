import { storyblokEditable } from '@storyblok/react/rsc';
import DownloadItem from './DownloadItem';

const GlobalDownloadReference = ({ blok }) => {
    console.log(blok, 11111111)
    return (
        <section {...storyblokEditable(blok)}>
            <DownloadItem blok={blok.reference.content} />
        </section>
    );
};

export default GlobalDownloadReference;
