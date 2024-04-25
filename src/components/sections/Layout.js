'use client'
import ConfigFooter from './Config_footer';
import ConfigHeader from './Config_header';

const Layout = ({ children, config_header, config_footer, lang }) => {
  console.log(lang, "lang");

    return (
        <div>
            <ConfigHeader lang={lang} blok={config_header.content} />
            {children}
            <ConfigFooter lang={lang} blok={config_footer.content} />
        </div>
    );
};
export default Layout;
