'use client';
import { PhoneIcon } from '../icons/PhoneIcon';
import { MailIcon } from '../icons/MailIcon';
import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionContactItem = ({ blok }) => {
    return (
        <ul {...storyblokEditable(blok)} className="mb-8">
            <li className="mb-2">
                <p className="text-base font-medium text-black dark:text-gray-400 lg:text-xl">
                    {blok?.contact_name}
                </p>
            </li>
            <li className="mb-2">
                <div className="group-hover:text-primary">
                    <a
                        href="tel:+496170961709"
                        className="flex cursor-pointer items-center text-black transition-all hover:text-primary dark:text-gray-400"
                    >
                        <span className="mr-2">
                            <PhoneIcon
                                color="#000"
                                className="h-4 w-4 fill-black"
                            />
                        </span>
                        {blok?.contact_phone}
                    </a>
                </div>
            </li>
            <li className="mb-2">
                <div className="group-hover:text-primary">
                    <a
                        href="mailto:ir@stadlerrail.com"
                        className="flex cursor-pointer items-center text-black transition-all hover:text-primary dark:text-gray-400"
                    >
                        <span className="mr-2">
                            <MailIcon
                                color="#000"
                                className="h-4 w-4 fill-black"
                            />
                        </span>
                        {blok?.contact_email}
                    </a>
                </div>
            </li>
        </ul>
    );
};

export default AccordionContactItem;
