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

export default function MailchimpContact({ blok }) {
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState(false);
    const [validationSubscribedError, setValidationSubscribedError] = useState(false);
    const [validationSuccess, setValidationSuccess] = useState(false);
    const [errors, setErrors] = useState({ email: false, firstName: false, lastName: false, company: false, isSelected: false });

    const subscribeUser = async () => {

        const url = `api/mailchimp-contact?email=${email}`;

        const checkConnection = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const attributes = await checkConnection.json()
        console.log("attributes", attributes)

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


    const validateForm = () => {

        subscribeUser()

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
                        <H2>Mailchimp Contact</H2>
                    </div>


                    <div className="mt-6 w-full lg:mt-0 relative">

                        <div className="mb-2 relative w-full">
                            <label className="mb-2 text-sm font-medium">
                                Email{' '}
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
                            />
                            <div className={`${errors.email ? "block " : "hidden "} mt-2 mb-2 text-sm text-red-700 font-medium`}>{blok.email_error}</div>
                        </div>

                        <div className="clear flex justify-center">
                            <input type="submit" name="subscribe"
                                className="bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                                onClick={handleSubmit} value="Subscribe"
                            />
                        </div>
                        <div className={`${validationError ? "block " : "hidden "} mt-4 mb-2 text-sm text-red-700 font-medium`}>Don't work</div>
                        {validationSuccess && <div className="top-0 left-0 absolute bg-white w-full h-full items-center flex flex-wrap content-center align-center justify-center text-md">
                            <div className="w-full text-center">
                            </div>
                            <div className="w-2/3 text-center">Work</div>
                        </div>}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
