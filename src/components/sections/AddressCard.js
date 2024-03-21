'use client';
import { storyblokEditable } from '@storyblok/react/rsc';

const AddressCard = ({ blok }) => (
    <div
        {...storyblokEditable(blok)}
        className="w-full items-center p-8 bg-gray-50 shadow"
    >
        <p className="text-base font-semibold text-gray-500">{blok?.title}</p>
        <p className="text-base font-normal text-gray-500">{blok?.address}</p>
        <p className="text-base font-normal text-gray-500">{blok?.hours}</p>
    </div>
);

export default AddressCard;
