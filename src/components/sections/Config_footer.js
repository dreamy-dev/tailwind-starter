
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

import Footer from './Footer';
const ConfigFooter = ({ blok }) => {
    console.log(blok, 'blok');
    return (
        <div className="bg-blueDark mt-auto" {...storyblokEditable(blok)}>

            <div >
                <div>
                    {blok.footer.map(
                        (nestedBlok) =>
                            <Footer
                                className=""
                                blok={nestedBlok}
                                key={nestedBlok._uid}
                            />
                    )}
                </div>
            </div>
        </div>
    );
};
export default ConfigFooter;
