
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

import Footer from './Footer';
const ConfigFooter = ({ blok }) => {
    return (
        <div className="bg-blueDark mt-auto" {...storyblokEditable(blok)}>
            {/* {JSON.stringify(blok)} */}
            <div >
                <div >


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
