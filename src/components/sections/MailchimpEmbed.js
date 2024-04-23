import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import { useState, useEffect } from 'react';
import RichTextRenderer from '../helpers/RichTextRenderer';

export default function MailchimpEmbed({ blok }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [validationSubscribedError, setValidationSubscribedError] = useState(false);
    const [validationSuccess, setValidationSuccess] = useState(false);
    const [errors, setErrors] = useState({ email: false, firstName: false, lastName: false, company: false, isSelected: false });

    const subscribeUser = async () => {

        const url = `../api/mailchimp-subscribe?email=${email}&firma=${company}&firstName=${firstName}&lastName=${lastName}`;

        const checkConnection = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const attributes = await checkConnection.json()

        if (attributes.status == "subscribed") {
            setValidationSuccess(true)
            setValidationError(false)
            setValidationSubscribedError(false)
            return false
        }
        else if (attributes.status == 400) {
            setValidationSuccess(false)
            setValidationError(true)
            setValidationSubscribedError(true)
            return false
        }
        else if (attributes.status) {
            setValidationSuccess(false)
            setValidationError(true)
            setValidationSubscribedError(false)
            return false
        } else {
            setValidationSuccess(false)
            setValidationError(true)
            setValidationSubscribedError(false)
        }
    };

    const validateFirstName = () => {
        if (!firstName) {
            setErrors({ ...errors, firstName: true });
        } else {
            setErrors({ ...errors, firstName: false });
        }
    }
    const validateLastName = () => {
        if (!lastName) {
            setErrors({ ...errors, lastName: true });
        } else {
            setErrors({ ...errors, lastName: false });
        }
    }
    const validateEmail = () => {
        if (!email) {
            setErrors({ ...errors, email: true });
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ ...errors, email: true });
        } else {
            setErrors({ ...errors, email: false });
        }
    }
    const validateCompany = () => {
        if (!company) {
            setErrors({ ...errors, company: true });
        } else {
            setErrors({ ...errors, company: false });
        }
    }
    const validateCheckbox = (value) => {
        if (value) {
            setErrors({ ...errors, isSelected: true });
        } else {
            setErrors({ ...errors, isSelected: false });
        }
    }

    const validateForm = () => {
        let errors = { email: false, firstName: false, lastName: false, company: false, isSelected: false }
        if (!firstName) {
            errors = { ...errors, firstName: true };
        }
        if (!lastName) {
            errors = { ...errors, lastName: true };
        }
        if (!email) {
            errors = { ...errors, email: true };
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors = { ...errors, email: true };
        }
        if (!company) {
            errors = { ...errors, company: true };
        }
        if (!isSelected) {
            errors = { ...errors, isSelected: true };
        }
        setErrors({ ...errors });
        if (Object.values(errors).includes(true)) {
            return false
        } else {
            subscribeUser()
        }
    };
    // Submit 
    const handleSubmit = () => {
        validateForm();
    };

    return (
        <section {...storyblokEditable(blok)} className="bg-white my-20 ">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="mb-4">
                        <H2>{blok.title}</H2>
                    </div>
                    <div className="font-light sm:text-xl">
                        <Text>{blok.description}</Text>
                    </div>


                    <div className="mt-6 w-full lg:mt-0 relative">
                        <div className="grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-2 items-center">
                            <div className="mb-2 relative w-full">
                                <label className="mb-2 text-sm font-medium">
                                    {blok.fname_label}{' '}
                                    <span>
                                        *
                                    </span>
                                </label>
                                <input
                                    className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    onBlur={validateFirstName}
                                    type="text"
                                />
                                <div className={`${errors.firstName ? "block " : "hidden "} mt-2 mb-2 text-sm text-red-700 font-medium`}>{blok.fname_error}</div>
                            </div>
                            <div className="mb-2 relative w-full">
                                <label className="mb-2 text-sm font-medium">
                                    {blok.lname_label}{' '}
                                    <span>
                                        *
                                    </span>
                                </label>
                                <input
                                    className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    onBlur={validateLastName}
                                    type="text"
                                />
                                <div className={`${errors.lastName ? "block " : "hidden "} mt-2 mb-2 text-sm text-red-700 font-medium`}>{blok.lname_error}</div>
                            </div>
                        </div>
                        <div className="mb-2 relative w-full">
                            <label className="mb-2 text-sm font-medium">
                                {blok.company_label}{' '}
                                <span>
                                    *
                                </span>
                            </label>
                            <input
                                className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                type="text" value={company}
                                onChange={(e) =>
                                    setCompany(e.target.value)
                                }
                                onBlur={validateCompany}
                            />
                            <div className={`${errors.company ? "block " : "hidden "} mt-2 mb-2 text-sm text-red-700 font-medium`}>{blok.company_error}</div>
                        </div>
                        <div className="mb-2 relative w-full">
                            <label className="mb-2 text-sm font-medium">
                                {blok.email_label}{' '}
                                <span>
                                    *
                                </span>
                            </label>
                            <input
                                className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                type="email" value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                onBlur={validateEmail}
                            />
                            <div className={`${errors.email ? "block " : "hidden "} mt-2 mb-2 text-sm text-red-700 font-medium`}>{blok.email_error}</div>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <input
                                    name="checkbox-1"
                                    className="required relative shrink-0 w-4 h-4 border-2 border-primary checked:bg-primary checked:border-primary"
                                    checked={isSelected}
                                    onClick={(e) => { setSelection(e.target.checked); validateCheckbox(!e.target.checked) }}
                                    type="checkbox"
                                />
                                <label
                                    htmlFor="checkbox-1"
                                    className="ms-2 text-sm text-gray-900"
                                >
                                    <RichTextRenderer text={blok?.checkbox_label} />
                                </label>
                            </div>
                            <div className={`${errors.isSelected ? "block " : "hidden "} mt-2 mb-2 text-sm text-red-700 font-medium`}>{blok.checkbox_error}</div>
                        </div>
                        <div className="clear flex justify-center">
                            <input type="submit" name="subscribe"
                                className="bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                                onClick={handleSubmit} value={blok.button_text}
                            />
                        </div>
                        <div className={`${validationError ? "block " : "hidden "} mt-4 mb-2 text-sm text-red-700 font-medium`}>{validationSubscribedError ? blok.error_email_exists : blok.global_validation_error}</div>
                        {validationSuccess && <div className="top-0 left-0 absolute bg-white w-full h-full items-center flex align-center justify-center text-md"><p>{blok.global_validation_success}</p></div>}

                    </div>
                    {/*<div id="mc_embed_shell"
                        className="col-span-12 mt-8 w-full">

                        <div id="mc_embed_signup" className="w-full">
                            <form action="https://stadlerrail.us14.list-manage.com/subscribe/post?u=7e29f428e402a1b5e2a54d074&amp;id=be8e58f4ee&amp;v_id=3370&amp;f_id=000922e3f0"
                                method="post" id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                <div id="mc_embed_signup_scroll"
                                    className="items-center space-y-4 flex-col">
                                    <div className="grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-2 items-center">

                                        <div className="mc-field-group relative w-full">
                                            <label htmlFor="mce-FNAME"
                                                className="mb-2 text-sm font-medium">Vorname <span className="asterisk">*</span></label>
                                            <input type="text" name="FNAME" className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                id="mce-FNAME" required="" value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                } />
                                        </div>
                                        <div className="mc-field-group relative w-full">
                                            <label htmlFor="mce-LNAME"
                                                className="mb-2 text-sm font-medium">Nachname <span className="asterisk">*</span></label>
                                            <input type="text" name="LNAME" className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                id="mce-LNAME" required=""
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                                value={lastName} />
                                        </div>
                                    </div>
                                    <div className="mc-field-group relative w-full">
                                        <label htmlFor="mce-EMAIL"
                                            className="mb-2 text-sm font-medium">E-Mail-Adresse <span className="asterisk">*</span></label>
                                        <input type="email" name="EMAIL" className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            id="mce-EMAIL"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            } required="" />
                                    </div>
                                    <div className="mc-field-group relative w-full">
                                        <label htmlFor="mce-FIRMA"
                                            className="mb-2 text-sm font-medium">Firma <span className="asterisk">*</span></label>
                                        <input type="text" name="FIRMA" className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            id="mce-FIRMA" value={company}
                                            onChange={(e) =>
                                                setCompany(e.target.value)
                                            } required="" />

                                    </div>
                                    <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                                        <div className="content__gdpr">
                                            <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                                <label className="checkbox subfield" htmlFor="gdpr290262">
                                                    <input type="checkbox" id="gdpr_290262" name="gdpr[290262]"
                                                        className="gdpr required relative shrink-0 w-4 h-4 border-2 border-primary checked:bg-primary checked:border-primary"
                                                    />
                                                    <span
                                                        className="ms-2 text-sm text-gray-500 dark:text-gray-300"
                                                    >
                                                        {blok.checkbox_label} *
                                                    </span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response"></div>
                                        <div className="response" id="mce-success-response"></div>
                                    </div>
                                    <div aria-hidden="true" className="hidden"><input type="text" name="b_7e29f428e402a1b5e2a54d074_be8e58f4ee" tabindex="-1" /></div>
                                    <div className="clear flex justify-center">
                                        <input type="submit" name="subscribe" id="mc-embedded-subscribe"
                                            className="bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                                            readOnly value={blok.button_text}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></Script>
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
                                            for="mce-FIRMA"
                                            className="mb-2 text-sm font-medium"
                                        >
                                            {blok.company_label}{' '}
                                            <span className="asterisk">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="FIRMA"
                                            value={company}
                                            onChange={(e) =>
                                                setCompany(e.target.value)
                                            }
                                            className="required text block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            id="mce-FIRMA"
                                            required=""
                                        />
                                    </div>
                                    <div class="mc-field-group input-group">
                                        <ul>
                                            <li className="flex items-start">
                                                <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                                    <input
                                                        required=""
                                                        type="checkbox"
                                                        className="gdpr required relative shrink-0 w-4 h-4 border-2 border-primary checked:bg-primary checked:border-primary"
                                                        name="gdpr[290262]"
                                                        id="gdpr_290262"
                                                        value="First Choice"
                                                    />
                                                    <label
                                                        className="ms-2 text-sm text-gray-500 dark:text-gray-300"
                                                        for="gdpr[290262]"
                                                    >
                                                        {blok.checkbox_label} *
                                                    </label>
                                                </fieldset>
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
                        <Script type="text/javascript">{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='FIRMA';ftypes[6]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='MMERGE5';ftypes[5]='address';fnames[7]='MMERGE7';ftypes[7]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);`}</Script>
                    </div> */}
                </div>
            </ContentWidth>
        </section>
    );
}
