import { useState, useEffect } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H4 from '../typography/H4';
import H3 from '../typography/H3';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import { ArrowForward } from '../icons/ArrowForward';
import { Loader } from '../elements/Loader';

// 20 - Level
// 25 - Arbeitsort
// 10 - Berufsfelt

const filters = { '10': '', '20': '', '25': '' };

const ProspectiveCareer = ({ blok }) => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [attributes, setAttributes] = useState([]);
    const [dependentField, setDependentField] = useState(false);
    const [dependentFilter, setDependentFilter] = useState({});
    const [selectedOptions, setSelectedOptions] = useState(filters);
    const [isDataLoading, setIsDataLoading] = useState(true);

    const getJobs = async (filter = '', search = '') => {
        setIsDataLoading(true);

        const url = `api/prospective-jobs?filter=${filter}&search=${search}`;

        // console.log(dependentFilter, "dependentFilter")

        const checkConnection = await fetch(url, filters);
        const data = await checkConnection.json()
        setIsDataLoading(false);

        setJobs(data?.message?.jobs || [])

    };
    const getAttributes = async () => {

        const url = 'api/prospective-attributes';

        const checkConnection = await fetch(url);
        const attributes = await checkConnection.json()

        const selectAttributes = {}

        attributes?.attributes?.map(item => {
            selectAttributes[item.id] = { values: item.values, name }
        })

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
        if (e.target.value == "1098730") {
            const filterObject = {};
            filterObject[`25_${e.target.value}`] = ""
            setDependentFilter(filterObject)
            setDependentField(true)
        } else if (e.target.value == "1129870") {
            const filterObject = {};
            filterObject[`25_${e.target.value}`] = ""
            setDependentFilter(filterObject)
            setDependentField(true)
        }
        else {
            setDependentFilter({})
            setDependentField(false)
        }
        // console.log("setLocation", e)
    }
    const changeDependentFilter = (e) => {
        const updatedValue = {}
        updatedValue[Object.keys(dependentFilter)[0]] = e.target.value
        // console.log("changeDependentFilter", updatedValue)
        setDependentFilter(updatedValue)
        filterJobs(e, Object.keys(dependentFilter)[0], e.target.value);
    }


    const filterJobs = async (e, typeFilter, dependentField) => {
        let dependentStringFilter = false;
        const newSelectedOptions = { ...selectedOptions };
        if (dependentField) {
            dependentStringFilter = `${typeFilter}:${dependentField}`
        } else if (Object.keys(dependentFilter)[0]) {
            console.log(dependentFilter, "dependentFilter", e)
            dependentStringFilter = `${Object.keys(dependentFilter)[0]}:${Object.values(dependentFilter)[0]}`
        }
        if (!dependentField) {
            newSelectedOptions[typeFilter] = e.target.value;
            setSelectedOptions(newSelectedOptions);
        }

        let filtersString = ''

        Object.keys(newSelectedOptions).map((key) => {
            if (newSelectedOptions[key]) {
                if (filtersString.length) {
                    filtersString += `,`
                }
                filtersString += `${key}:${newSelectedOptions[key]}`;
            }
        })
        if (dependentStringFilter) {
            filtersString += `,${dependentStringFilter}`
        }
        console.log(filtersString, "filtersString")

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
                            href={blok.button_1.url}
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50  hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            {blok.button_1_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            href={blok.button_2.url}
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50 hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            {blok.button_2_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            href={blok.button_3.url}
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50 hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            {blok.button_3_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            href={blok.button_4.url}
                            type="button"
                            className="md:col-span-1 col-span-4 mb-4 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary bg-primarySolid-50  hover:bg-gray-100 hover:cursor-pointer hover:text-primary"
                        >
                            {blok.button_4_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                    </div>
                </div>
                <div className="mt-8">
                    <H2>{blok.title}</H2>
                    <Text>{blok.description_text}</Text>
                </div>

                <div className="grid col-span-12 grid-cols-12 my-8 mb-12">
                    <div className="grid col-span-12">
                        <label
                            htmlFor="search"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {blok.search_input_label}
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
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {blok.select_1_label}
                            </label>

                            <select
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => filterJobs(e, '10')}
                            >
                                <option value="">
                                    {blok.select_1_placeholder}
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
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {blok.select_2_label}
                            </label>
                            <select
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => filterJobs(e, '20')}
                            >
                                <option value="">
                                    {blok.select_2_placeholder}
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
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {blok.select_3_label}
                            </label>
                            <select
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => { filterJobs(e, '25'); setLocation(e, '25'); }}
                            >
                                <option value="">
                                    {blok.select_3_placeholder}
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
                                htmlFor="countries_disabled"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {blok.select_4_label}
                            </label>
                            <select
                                onChange={(e) => { changeDependentFilter(e) }}
                                disabled={!dependentField}
                                id="countries_disabled"
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">
                                    {blok.select_4_placeholder}
                                </option>
                                {dependentField && attributes[Object.keys(dependentFilter)[0]] && attributes[Object.keys(dependentFilter)[0]]["values"] && Object.keys(attributes[Object.keys(dependentFilter)[0]]["values"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes[Object.keys(dependentFilter)[0]]["values"][key]}
                                    </option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-12">
                    <H3>{blok.subtitle}</H3>
                    <div className="divide-y">
                        {isDataLoading ? <Loader /> : jobs?.map((item, key) => (
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