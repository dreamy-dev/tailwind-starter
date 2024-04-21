import React from 'react';

export const Loader = () => {
    return (
        <div className="flex flex-wrap align-middle justify-center mx-8 my-16">
            <div className="loader"></div>
            <div className="w-full text-center mt-8">Loading</div>
        </div>
    );
};
