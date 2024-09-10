'use client';
import { storyblokEditable } from '@storyblok/react';
import Header from './Header';
import HeaderNew from './HeaderNew';
const ConfigHeader = ({ blok }) => {
    return (
        <>
            <div {...storyblokEditable(blok)}>
                {blok?.header.map((nestedBlok) => (
                    <HeaderNew
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
