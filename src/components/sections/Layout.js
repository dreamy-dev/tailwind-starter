'use client'
import ConfigFooter from './Config_footer';

const Layout = ({ children, story }) => (
    <div>
        {/* <ConfigFooter blok={story.content} /> */}
        {children}
        <ConfigFooter blok={story.content} />
    </div>
);

export default Layout;
