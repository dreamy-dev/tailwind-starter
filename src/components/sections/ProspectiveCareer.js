import { useState, useEffect } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H4 from '../typography/H4';
import H2 from '../typography/H2';
import { ArrowForward } from '../icons/ArrowForward';

// 20 - Level
// 25 - Arbeitsort
// 10 - Berufsfelt
const filters = { '10': '', '20': '', '25': '', '25_': '' };

const ProspectiveCareer = ({ blok }) => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [attributes, setAttributes] = useState([]);
    const [dependentField, setDependentField] = useState('');
    const [selectedOptions, setSelectedOptions] = useState(filters);

    const getJobs = async (filter = '', search = '') => {

        const url = `api/prospective-jobs?filter=${filter}&search=${search}`;

        const checkConnection = await fetch(url, filters);

        const data = await checkConnection.json()

        setJobs(data?.message?.jobs || [])

    };
    const getAttributes = async () => {

        const url = 'api/prospective-attributes';

        const checkConnection = await fetch(url);

        const attributes = await checkConnection.json()

        const selectAttributes = {}
        // console.log("attributes", attributes)

        attributes?.attributes?.map(item => {
            selectAttributes[item.id] = { values: item.values, name }
        })
        console.log("selectAttributes", selectAttributes)

        setAttributes(selectAttributes)

    };
    useEffect(() => {
        getJobs()
        getAttributes()

    }, [])

    const onSearchChange = (e) => {
        setSearch(e.target.value);

        let filtersString = ''

        Object.keys(selectedOptions).map((key) => {
            if (selectedOptions[key]) {
                if (filtersString.length) {
                    filtersString += `,`
                }
                filtersString += `${key}:${selectedOptions[key]}`;
            }
        })

        if (e.target.value.length > 2) {
            getJobs(filtersString, e.target.value)
        } else {
            getJobs(filtersString)
        }
    };
    const setLocation = (e, typeFilter) => {
        if (e.target.value == "1098730" || e.target.value == "1098735") {
            setDependentField(`25_${e.target.value}`)
        }
        console.log("setLocation", e)
    }


    const filterJobs = (e, typeFilter) => {
        const newSelectedOptions = { ...selectedOptions };
        newSelectedOptions[typeFilter] = e.target.value;
        setSelectedOptions(newSelectedOptions);

        let filtersString = ''

        Object.keys(newSelectedOptions).map((key) => {
            if (newSelectedOptions[key]) {
                if (filtersString.length) {
                    filtersString += `,`
                }
                filtersString += `${key}:${newSelectedOptions[key]}`;
            }
        })
        console.log(filtersString)
        if (search.length > 2) {
            getJobs(filtersString, search)
        } else {
            getJobs(filtersString)
        }
    }

    return (
        <section className="mt-12" {...storyblokEditable(blok)}>
            <SmallWidth>
                <div className="grid col-span-12">
                    <div
                        className="grid grid-cols-4 justify-stretch hover:cursor-pointer gap-x-2"
                        role="group"
                    >
                        <a
                            href="#"
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50  hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            <p>Spontanbewerbung</p>
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            href="#"
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50 hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            <p>Personalvermittler</p>
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            href="#"
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50 hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            <p>Mein Profil</p>
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            href="#"
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50  hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            <p>Job-Abo</p>
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                    </div>
                </div>
                <div className="mt-8">
                    <H2>Übersicht der offenen Stellen</H2>
                </div>

                <div className="grid col-span-12 grid-cols-12 my-8 mb-12">
                    <div className="grid col-span-12">
                        <label
                            for="search"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Suchbegriff
                        </label>
                        <input
                            type="text"
                            id="search"
                            className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            onChange={(e) => onSearchChange(e)}
                        />
                    </div>
                    <div className="grid col-span-12 grid-cols-12 gap-6 mt-4">
                        <div className="grid col-span-6">
                            <label
                                for="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Berufsfeld
                            </label>
                            {/* {attributes["10"] && JSON.stringify(attributes["10"]["values"])} */}

                            <select
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => filterJobs(e, '10')}
                            >
                                <option value="">
                                    Berufsfeld
                                </option>
                                {attributes["10"] && attributes["10"]["values"] && Object.keys(attributes["10"]["values"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes["10"]["values"][key]}
                                    </option>
                                })}

                            </select>
                        </div>
                        <div className="grid col-span-6">
                            <label
                                for="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Level
                            </label>
                            <select
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => filterJobs(e, '20')}
                            >
                                <option value="">
                                    Level
                                </option>
                                {attributes["20"] && attributes["20"]["values"] && Object.keys(attributes["20"]["values"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes["20"]["values"][key]}
                                    </option>
                                })}

                            </select>
                        </div>
                    </div>
                    <div className="grid col-span-12 grid-cols-12 gap-6 mt-4">
                        <div className="grid col-span-6">
                            <label
                                for="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Arbeitsort
                            </label>
                            <select
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => { filterJobs(e, '25'); setLocation(e, '25'); }}
                            >
                                <option value="">
                                    Alle
                                </option>
                                {attributes["25"] && attributes["25"]["values"] && Object.keys(attributes["25"]["values"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes["25"]["values"][key]}
                                    </option>
                                })}

                            </select>
                        </div>
                        <div className="grid col-span-6">
                            <label
                                for="countries_disabled"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Region / Land
                            </label>
                            <select
                                disabled={!dependentField}
                                id="countries_disabled"
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">None</option>
                                {dependentField && attributes[dependentField] && attributes[dependentField]["values"] && Object.keys(attributes[dependentField]["values"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes[dependentField]["values"][key]}
                                    </option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-12">
                    <div className="divide-y">
                        {jobs?.map((item, key) => (
                            <a key={key} href={item.links.directlink} target="_blank" className="block py-4 hover:cursor-pointer hover:text-primary">
                                <H4>{item.title}</H4>
                                <div className="flex">
                                    <div className="mr-4 flex items-center">
                                        <span>
                                            <img
                                                className="w-3 h-3 mr-1"
                                                src="/ohne-box/location.svg"
                                                alt=""
                                            />
                                        </span>
                                        <p>{item.szas["sza_location.city"]}, {item.szas["sza_location.country"]}</p>
                                    </div>
                                    <div className="mr-4 flex items-center">
                                        <span>
                                            <img
                                                className="w-3 h-3 mr-1"
                                                src="/ohne-box/schedule.svg"
                                                alt=""
                                            />
                                        </span>
                                        <p>{item.szas.sza_pensum}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </SmallWidth>

        </section>
    )
}
export default ProspectiveCareer;