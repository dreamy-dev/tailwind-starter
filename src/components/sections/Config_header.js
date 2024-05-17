import { storyblokEditable } from '@storyblok/react';
import Header from './Header';
const ConfigHeader = ({ blok }) => {
    return (
        <>
            <div {...storyblokEditable(blok)}>
                {blok?.header.map((nestedBlok) => (
                    <Header
                        className=""
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                    />
                ))}
            </div>
        </>
    );
};
export default ConfigHeader;
