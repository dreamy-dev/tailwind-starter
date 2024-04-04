import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import FullWidth from '../layouts/FullWidth';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import Script from 'next/script';

export default function MailchimpEmbed({ blok }) {
    return (

        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form action="https://stadlerrail.us14.list-manage.com/subscribe/post?u=7e29f428e402a1b5e2a54d074&amp;id=abef8b12b4&amp;f_id=00b922e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group"><label for="mce-EMAIL">Email <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" /></div><div className="mc-field-group"><label for="mce-FNAME">First Name <span className="asterisk">*</span></label><input type="text" name="FNAME" className="required text" id="mce-FNAME" value="" required="" /></div><div className="mc-field-group"><label for="mce-LNAME">Last Name <span className="asterisk">*</span></label><input type="text" name="LNAME" className="required text" id="mce-LNAME" value="" required="" /></div><div className="mc-field-group"><label for="mce-COMPANY">Company <span className="asterisk">*</span></label><input type="text" name="COMPANY" className="required text" id="mce-COMPANY" value="" required="" /></div>
                        <div id="mce-responses" className="clear">
                            <div className="response hidden" id="mce-error-response"></div>
                            <div className="response hidden" id="mce-success-response"></div>
                        </div><div aria-hidden="true"><input type="text" name="b_7e29f428e402a1b5e2a54d074_abef8b12b4" tabindex="-1" value="" /></div><div className="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" /></div>
                    </div>
                </form>
            </div>
            <Script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></Script>
            <Script type="text/javascript">{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='COMPANY';ftypes[6]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='address';fnames[7]='MMERGE7';ftypes[7]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);`}</Script>
        </div>
    )
}