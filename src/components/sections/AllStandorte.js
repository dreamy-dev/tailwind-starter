
import ContentWidth from '../layouts/ContentWidth';
import { getStoryblokApi, storyblokEditable,StoryblokComponent } from '@storyblok/react/rsc';
import DateFormatter from '../helpers/DateFormatter';
import TrimText from '../helpers/TrimText';
import { useState } from 'react';
import AccordionLocations from './AccordionLocations';
const filters = { country: '', category: '' };

function AllStandorte({ blok }) {
    const [selectedOptions, setSelectedOptions] = useState({
        filters
    });
 console.log(selectedOptions, 'selectedOptions');
    
console.log(blok)

  const handleFilterChange = (e, filterType) => {
      const locationSelectedOptions = { ...selectedOptions };
      locationSelectedOptions[filterType] = e.target.value;
      setSelectedOptions(locationSelectedOptions);
    };
    
     const countryDropdown = (
         <select
             className=" px-4 py-2 text-base border rounded block"
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
                className=" px-4 py-2 text-base border rounded block"
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



   
  
    // const filterArticles = (e, typeFilter) => {
    //     const locationSelectedOptions = { ...selectedOptions };
    //     locationSelectedOptions[typeFilter] = e.target.value;
    //     setSelectedOptions(locationSelectedOptions);
    //     const categories = [];
    //     Object.values(locationSelectedOptions).forEach((value) => {
    //         value.length && categories.push(value);
    //     });

    
    //     if (categories.length > 0) {
           
    //     }
    //     if (search.length > 2) {
           
    //     }

   
    // };

 

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 flex flex-col items-center justify-center pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
                <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
                    <li className="mb-4 mr-2 lg:mr-4">{countryDropdown}</li>
                    <li className="mb-4 mr-2 lg:mr-4"> {categoryDropdown}</li>
                    <li className="mb-4 mr-2 lg:mr-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                className="inline-block px-8 py-2 text-base border hover:text-gray-900 hover:bg-gray-100"
                                placeholder={blok.text_search}
                                onChange={(e) => onSearchChange(e)}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="pb-24 col-span-12">
                {blok.locations_wrapper.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                        componentMap={{
                            "single-location-wrapper": AccordionLocations, 
                        }}
                    />
                ))}
            </div>
        </ContentWidth>
    );
}
export default AllStandorte;
