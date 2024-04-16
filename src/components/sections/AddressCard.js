'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
  import RichTextRenderer from '../helpers/RichTextRenderer';

const AddressCard = ({ blok }) => (
    <div
        {...storyblokEditable(blok)}
        className="w-full items-center p-8 bg-gray-50 shadow"
    >
        <div className="mb-2">
            <p className="text-base font-semibold text-gray-500">
                {blok?.title}
            </p>
            <RichTextRenderer text={blok?.address_hours} />
        </div>
    </div>
);

export default AddressCard;
