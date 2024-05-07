import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import { useState, useEffect } from 'react';
import RichTextRenderer from '../helpers/RichTextRenderer';
import {
    render,
} from 'storyblok-rich-text-react-renderer';

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
                        <div className="grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-2 items-start">
                            <div className="mb-2 relative w-full items-start">
                                <label className="mb-2 text-sm font-medium">
                                    {blok.fname_label} <span>*</span>
                                </label>
                                <input
                                    className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary focus:border-primary"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    onBlur={validateFirstName}
                                    type="text"
                                />
                                <div
                                    className={`${errors.firstName ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.fname_error}
                                </div>
                            </div>
                            <div className="mb-2 relative w-full items-start">
                                <label className="mb-2 text-sm font-medium">
                                    {blok.lname_label} <span>*</span>
                                </label>
                                <input
                                    className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary focus:border-primary"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    onBlur={validateLastName}
                                    type="text"
                                />
                                <div
                                    className={`${errors.lastName ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.lname_error}
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 relative w-full">
                            <label className="mb-2 text-sm font-medium">
                                {blok.company_label} <span>*</span>
                            </label>
                            <input
                                className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary focus:border-primary"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                onBlur={validateCompany}
                            />
                            <div
                                className={`${errors.company ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                            >
                                {blok.company_error}
                            </div>
                        </div>
                        <div className="mb-2 relative w-full">
                            <label className="mb-2 text-sm font-medium">
                                {blok.email_label} <span>*</span>
                            </label>
                            <input
                                className="block p-3 w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary focus:border-primary"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                            />
                            <div
                                className={`${errors.email ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                            >
                                {blok.email_error}
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-4 mb-6 items-start">
                                <input
                                    name="checkbox-1"
                                    className="mt-0.5 relative shrink-0 w-4 h-4 border-2 border-primary checked:bg-primary hover:checked:bg-primary checked:border-primary focus:checked:bg-primary hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary"
                                    defaultChecked={isSelected}
                                    onClick={(e) => {
                                        setSelection(e.target.checked);
                                        validateCheckbox(!e.target.checked);
                                    }}
                                    type="checkbox"
                                />
                                <label
                                    htmlFor="checkbox-1"
                                    className="ms-2 text-sm text-gray-900"
                                >
                                    {render(blok?.checkbox_label)}
                                </label>
                            </div>
                            <div
                                className={`${errors.isSelected ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                            >
                                {blok.checkbox_error}
                            </div>
                        </div>
                        <div className="clear flex justify-center">
                            <input
                                type="submit"
                                name="subscribe"
                                className="bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                                onClick={handleSubmit}
                                value={blok.button_text}
                            />
                        </div>
                        <div
                            className={`${validationError ? 'block ' : 'hidden '} mt-4 mb-2 text-sm text-red-700 font-medium`}
                        >
                            {validationSubscribedError
                                ? blok.error_email_exists
                                : blok.global_validation_error}
                        </div>
                        {validationSuccess && (
                            <div className="top-0 left-0 absolute bg-white w-full h-full items-center flex flex-wrap content-center align-center justify-center text-md">
                                <div className="w-full text-center">
                                    <H3>{blok.global_validation_success}</H3>
                                </div>
                                <div className="w-2/3 text-center">
                                    <RichTextRenderer
                                        text={
                                            blok?.global_validation_success_description
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
