'use client';

import { storyblokEditable } from '@storyblok/react/rsc';

const ImageTrippleBanner = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <div className="gap-4  sm:grid sm:grid-cols-4 sm:mt-12">
                <img
                    className="object-cover h-80 w-full scale-100 col-span-2  sm:block  "
                    src={blok?.image1.filename}
                    alt="Content gallery 1"
                />
                <img
                    className=" object-cover h-80 w-full scale-100 hidden col-span-1 sm:block"
                    src={blok?.image2.filename}
                    alt="Content gallery 2"
                />
                <img
                    className="object-cover h-80 w-full scale-100 hidden col-span-1 sm:block"
                    src={blok?.image3.filename}
                    alt="Content gallery 3"
                />
            </div>
        </section>
    );
};

export default ImageTrippleBanner;
