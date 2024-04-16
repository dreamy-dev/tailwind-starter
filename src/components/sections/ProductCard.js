import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H3 from '../typography/H3';
import H4 from '../typography/H4';

const ProductCard = ({ blok }) => (
    <li className="" {...storyblokEditable(blok)}>
        <H4 styles="mb-4">{blok.title}</H4>
        <img
            src={blok.image.filename}
            alt={`Image for ${blok.title}`}
            className="w-full h-auto object-cover object-center"
        />
        <div className="pr-0">
            <div className="flex flex-col items-start gap-2 text-xl mt-5 mb-5">
                <Text>{blok.text}</Text>
            </div>
        </div>
    </li>
);

export default ProductCard;
