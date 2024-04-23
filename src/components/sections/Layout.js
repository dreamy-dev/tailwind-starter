'use client'
import ConfigFooter from './Config_footer';
import ConfigHeader from './Config_header';

const Layout = ({ children, story }) => {
  
    console.log('story.content:', story.content);

    return (
        <div>
            {/* <ConfigHeader blok={story.content} /> */}
            {children}
            <ConfigFooter blok={story.content} />
        </div>
    );
};
export default Layout;
