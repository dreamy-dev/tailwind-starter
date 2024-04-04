import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import FullWidth from '../layouts/FullWidth';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function MailchimpEmbed({ blok }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    return (
        <section {...storyblokEditable(blok)} className="bg-white my-20 ">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div className="gap-16 justify-between items-center p-6 text-white bg-primary lg:flex lg:gap-24 md:p-12">

                    <H2 styles="mb-4">Sign up for our newsletter</H2>
                    <p className="font-light text-white sm:text-xl">
                        Stay up to date with the roadmap progress,
                        announcements and exclusive discounts feel free to
                        sign up with your email.
                    </p>
                    <div id="mc_embed_shell">
                        <div id="mc_embed_signup" className="mt-6 w-full lg:mt-0">
                            <form action="https://stadlerrail.us14.list-manage.com/subscribe/post?u=7e29f428e402a1b5e2a54d074&amp;id=abef8b12b4&amp;f_id=00b922e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                <div id="mc_embed_signup_scroll">
                                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    <div className="mc-field-group">
                                        <label for="mce-EMAIL" className="mb-2 text-sm font-medium text-white">Email <span className="asterisk">*</span></label>
                                        <input type="email" name="EMAIL" value={email} onChange={e => setEmail(e.target.value)} className="required email block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-white" id="mce-EMAIL" required="" />
                                    </div>
                                    <div className="items-center mb-8 space-y-4 flex-col">
                                        <div className="mc-field-group relative w-full">
                                            <label for="mce-FNAME" className="mb-2 text-sm font-medium text-white">First Name <span className="asterisk">*</span></label>
                                            <input type="text" name="FNAME" value={firstName} onChange={e => setFirstName(e.target.value)} className="required text block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-white" id="mce-FNAME" required="" />
                                        </div>
                                        <div className="mc-field-group relative w-full">
                                            <label for="mce-LNAME" className="mb-2 text-sm font-medium text-white">Last Name <span className="asterisk">*</span></label>
                                            <input type="text" name="LNAME" value={lastName} onChange={e => setLastName(e.target.value)} className="required text block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-white" id="mce-LNAME" required="" />
                                        </div>
                                    </div>
                                    <div className="mc-field-group">
                                        <label for="mce-COMPANY" className="mb-2 text-sm font-medium text-white">Company <span className="asterisk">*</span></label>
                                        <input type="text" name="COMPANY" value={company} onChange={e => setCompany(e.target.value)} className="required text block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-white" id="mce-COMPANY" required="" />
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response hidden" id="mce-error-response"></div>
                                        <div className="response hidden" id="mce-success-response"></div>
                                    </div>
                                    <div className="hidden" aria-hidden="true"><input type="text" name="b_7e29f428e402a1b5e2a54d074_abef8b12b4" tabindex="-1" value="" /></div>
                                    <div className="clear flex center">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="flex text-sm px-5 py-3 items-center hover:primary-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded" value="Subscribe" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></Script>
                        <Script type="text/javascript">{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='COMPANY';ftypes[6]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='address';fnames[7]='MMERGE7';ftypes[7]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);`}</Script>
                    </div>
                </div>
            </div>
        </section>
    )
}