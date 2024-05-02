'use client'
import ConfigFooter from './Config_footer';
import ConfigHeader from './Config_header';

const Layout = ({ children, config_header, config_footer}) => {


    return (
        <div>
            <ConfigHeader  blok={config_header.content} />
            {children}
            <ConfigFooter  blok={config_footer.content} />
        </div>
    );
};
export default Layout;
