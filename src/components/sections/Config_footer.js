
import { storyblokEditable} from '@storyblok/react';
import Footer from './Footer';
const ConfigFooter = ({ blok }) => {
    return (
        <div className="bg-blueDark mt-auto" {...storyblokEditable(blok)}>
          
                
                    {blok?.footer.map(
                        (nestedBlok) => 
                        <Footer
                            className=""
                            blok={nestedBlok}
                            key={nestedBlok._uid}
                        />
                    )}
             
        </div>
    );
};
export default ConfigFooter;
