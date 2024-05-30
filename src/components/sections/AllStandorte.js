'use client';
import ContentWidth from '../layouts/ContentWidth';
import {
    getStoryblokApi,
    storyblokEditable,
    StoryblokComponent,
} from '@storyblok/react/rsc';

import { useState } from 'react';
import { SearchIcon } from '../icons/SearchIcon';
const filters = { country: '', category: '', searchTerm: '' };

function AllStandorte({ blok }) {
    const [selectedOptions, setSelectedOptions] = useState({
        filters,
    });

    const countryDropdown = (
        <select
            className="w-full px-4 py-2 text-base border-primary block focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100"
            onChange={(e) => handleFilterChange(e, 'country')}
            value={selectedOptions.country}
        >
            <option value="">{blok.filter_country_title}</option>
            {blok.filter_country.map((country, index) => (
                <option key={index} value={country.uuid}>
                    {country.name}
                </option>
            ))}
        </select>
    );

    const categoryDropdown = (
        <select
            className="w-full px-4 py-2 text-base border-primary block focus:ring-1 focus:ring-primary hover:text-gray-900 hover:bg-gray-100"
            onChange={(e) => handleFilterChange(e, 'category')}
            value={selectedOptions.category}
        >
            <option value="">{blok.filter_businessarea_title}</option>
            {blok.filter_business_area.map((category, index) => (
                <option key={index} value={category.uuid}>
                    {category.content.category}
                </option>
            ))}
        </select>
    );

    const handleFilterChange = (e, filterType) => {
        const locationSelectedOptions = { ...selectedOptions };
        locationSelectedOptions[filterType] = e.target.value;
        setSelectedOptions(locationSelectedOptions);
    };

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSelectedOptions((prevState) => ({ ...prevState, searchTerm }));
    };

    const filteredLocations = blok.locations_wrapper.filter((location) => {
        const countryMatch =
            !selectedOptions.country ||
            location.tag_country.some(
                (tag) => tag.uuid === selectedOptions.country
            );
        const categoryMatch =
            !selectedOptions.category ||
            location.tag_business_area.some(
                (tag) => tag.uuid === selectedOptions.category
            );
        const textMatch =
            !selectedOptions.searchTerm ||
            (location.title &&
                location.title
                    ?.toLowerCase()
                    .includes(selectedOptions.searchTerm)) ||
            (location.text &&
                location.text
                    ?.toLowerCase()
                    .includes(selectedOptions.searchTerm)) ||
            location.tag_country.some((tag) =>
                tag.name.toLowerCase().includes(selectedOptions.searchTerm)
            ) ||
            location.tag_business_area.some((tag) =>
                tag.content.category
                    ?.toLowerCase()
                    .includes(selectedOptions.searchTerm)
            ) ||
            location.tag_division.some((tag) =>
                tag.name.toLowerCase().includes(selectedOptions.searchTerm)
            );

        return countryMatch && categoryMatch && textMatch;
    });

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 mt-12 ">
                <ul className="flex flex-col md:flex-row gap-0 lg:gap-8 text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
                    <li className="w-full md:w-1/3 mb-4 mr-2 lg:mr-4">
                        {countryDropdown}
                    </li>
                    <li className="w-full md:w-1/3 mb-4 mr-2 lg:mr-4">
                        {categoryDropdown}
                    </li>
                    <li className="w-full md:w-1/3 mb-4 mr-2 lg:mr-4">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <SearchIcon
                                    className="w-3 h-3 fill-gray-500"
                                    color="#00000080"
                                />
                            </div>
                            <input
                                className="w-full inline-block px-4 py-2 text-base border-primary hover:text-gray-900 hover:bg-gray-100 focus:ring-1 focus:ring-primary"
                                placeholder={blok.text_search}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="pb-24 col-span-12">
                {filteredLocations.map((nestedBlok, index) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                    />
                ))}
            </div>
        </ContentWidth>
    );
}
export default AllStandorte;
