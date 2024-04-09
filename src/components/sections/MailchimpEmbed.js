import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import FullWidth from '../layouts/FullWidth';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
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
            <ContentWidth>
                <div className="col-span-12">
                    <div className="mb-4">
                        <H2>{blok.title}</H2>
                    </div>
                    <div className="font-light text-white sm:text-xl">
                        <Text>{blok.description}</Text>
                    </div>
                    <div
                        id="mc_embed_shell"
                        className="col-span-12 mt-8 w-full"
                    >
                        <div id="mc_embed_signup" className="w-full">
                            <form
                                action="https://stadlerrail.us14.list-manage.com/subscribe/post?u=7e29f428e402a1b5e2a54d074&amp;id=be8e58f4ee&amp;f_id=00b922e3f0"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_blank"
                            >
                                <div
                                    id="mc_embed_signup_scroll"
                                    className="items-center space-y-4 flex-col"
                                >
                                    <div className="grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-2 items-center">
                                        <div className="mc-field-group relative w-full">
                                            <label
                                                for="mce-FNAME"
                                                className="mb-2 text-sm font-medium"
                                            >
                                                {blok.fname_label}{' '}
                                                <span className="asterisk">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="FNAME"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                                className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                id="mce-FNAME"
                                                required=""
                                            />
                                        </div>
                                        <div className="mc-field-group relative w-full">
                                            <label
                                                for="mce-LNAME"
                                                className="mb-2 text-sm font-medium"
                                            >
                                                {blok.lname_label}{' '}
                                                <span className="asterisk">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="LNAME"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                                className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                id="mce-LNAME"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="mc-field-group">
                                        <label
                                            for="mce-EMAIL"
                                            className="mb-2 text-sm font-medium"
                                        >
                                            {blok.email_label}{' '}
                                            <span className="asterisk">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className="required email block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            id="mce-EMAIL"
                                            required=""
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label
                                            for="mce-COMPANY"
                                            className="mb-2 text-sm font-medium"
                                        >
                                            {blok.company_label}{' '}
                                            <span className="asterisk">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="COMPANY"
                                            value={company}
                                            onChange={(e) =>
                                                setCompany(e.target.value)
                                            }
                                            className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            id="mce-COMPANY"
                                            required=""
                                        />
                                    </div>
                                    <div class="mc-field-group input-group">
                                        <ul>
                                            <li className="flex items-start">
                                                <input
                                                    required=""
                                                    type="checkbox"
                                                    className="required relative shrink-0 w-4 h-4 border-2 border-primary checked:bg-primary checked:border-primary"
                                                    name="MMERGE3"
                                                    id="mce-MMERGE30"
                                                    value="First Choice"
                                                />
                                                <label
                                                    className="ms-2 text-sm text-gray-500 dark:text-gray-300"
                                                    for="mce-MMERGE30"
                                                >
                                                    {blok.checkbox_label} *
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        id="mce-responses"
                                        className="clear mb-16"
                                    >
                                        <div
                                            className="response hidden"
                                            id="mce-error-response"
                                        ></div>
                                        <div
                                            className="response hidden"
                                            id="mce-success-response"
                                        ></div>
                                    </div>
                                    <div className="hidden" aria-hidden="true">
                                        <input
                                            type="text"
                                            name="b_7e29f428e402a1b5e2a54d074_be8e58f4ee"
                                            tabindex="-1"
                                            value=""
                                        />
                                    </div>
                                    <div className="clear flex justify-center">
                                        <input
                                            type="submit"
                                            name="subscribe"
                                            id="mc-embedded-subscribe"
                                            className="bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                                            value={blok.button_text}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Script
                            type="text/javascript"
                            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                        ></Script>
                        <Script type="text/javascript">{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='COMPANY';ftypes[6]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='address';fnames[7]='MMERGE7';ftypes[7]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);`}</Script>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
