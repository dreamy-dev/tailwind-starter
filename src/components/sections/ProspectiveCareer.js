import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H4 from '../typography/H4';
import H3 from '../typography/H3';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import { ArrowForward } from '../icons/ArrowForward';
import { Loader } from '../elements/Loader';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

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
    const searchParams = useSearchParams()
    const currentLocale = useCurrentLocale(i18nConfig);

    // function to get all the jobs (with possible filters and search query) via server function in next
    const getJobs = async (filter = '', search = '') => {
        setIsDataLoading(true);

        const url = `/${currentLocale}/api/prospective-jobs?filter=${filter}&search=${search}`;

        const checkConnection = await fetch(url, filters);
        const data = await checkConnection.json()
        setIsDataLoading(false);

        setJobs(data?.message?.jobs || [])

    };

    // function to get all the attributes via server function in next
    const getAttributes = async () => {
        const url = `/${currentLocale}/api/prospective-attributes?language=${blok.default_language}`;

        const checkConnection = await fetch(url);
        const attributes = await checkConnection.json()
        console.log("attributes", checkConnection, attributes)

        const selectAttributes = {}

        attributes?.attributes?.map(item => {
            selectAttributes[item.id] = item.values
        })

        console.log(selectAttributes, "selectAttributes")

        setAttributes(selectAttributes)
    };

    // on component mounting we need to check if there are query parameters in URL
    // e.g. ?20=1129862
    // it means that some of the filters should be preselected
    // 10 - Berufsfelt
    // 20 - Level
    // 25 - Arbeitsort

    useEffect(() => {
        let filters = ""
        const newSelectedOptions = { ...selectedOptions };
        if (searchParams.get('10')) {
            filters += `10:${searchParams.get('10')},`
            newSelectedOptions['10'] = searchParams.get('10');
        }
        if (searchParams.get('25')) {
            filters += `25:${searchParams.get('25')},`
            newSelectedOptions['25'] = searchParams.get('25');
            console.log("searchParams.get('25')", searchParams.get('25'))
            if (searchParams.get('25') == "1129870") {
                const filterObject = {};
                filterObject[`25_${searchParams.get('25')}`] = ""
                setDependentFilter(filterObject)
                setDependentField(true)
                console.log("filterObject", filterObject, dependentFilter)
            }
            if (searchParams.get('25') == "1098730") {
                const filterObject = {};
                filterObject[`25_${searchParams.get('25')}`] = ""
                setDependentFilter(filterObject)
                setDependentField(true)
                console.log("filterObject", filterObject, dependentFilter)
            }
        }
        if (searchParams.get('20')) {
            filters += `20:${searchParams.get('20')},`
            newSelectedOptions['20'] = searchParams.get('20');
        }
        // setting fiters for the background object to manipulate onSelect function
        setSelectedOptions(newSelectedOptions)

        console.log("filters", filters)

        // fetching jobs with filter values
        getJobs(filters)

        // getting attributes' values for selects
        console.log(blok.default_language !== "unset", blok.default_language)
        if (blok.default_language !== "unset") {
            getAttributes()
        } else {
            let selectAttributes = {}

            let berufsfeldValues = {}
            berufsfeldValues["1077440"] = blok.purchasing || ''
            berufsfeldValues["1077441"] = blok.engineering || ''
            berufsfeldValues["1077442"] = blok.finance || ''
            berufsfeldValues["1077443"] = blok.human_resources || ''
            berufsfeldValues["1077444"] = blok.commissioning || ''
            berufsfeldValues["1077445"] = blok.it || ''
            berufsfeldValues["1077446"] = blok.commercial_professions || ''
            berufsfeldValues["1077447"] = blok.logistics || ''
            berufsfeldValues["1077448"] = blok.production || ''
            berufsfeldValues["1077450"] = blok.quality_management || ''
            berufsfeldValues["1077452"] = blok.sales_and_marketing || ''
            berufsfeldValues["1186757"] = blok.project_management || ''
            selectAttributes["10"] = berufsfeldValues

            let locationValues = {}
            locationValues["1098730"] = blok.switzerland || ''
            locationValues["1098735"] = blok.germany || ''
            locationValues["1129870"] = blok.other || ''
            locationValues["1120079"] = blok.denmark || ''
            locationValues["1223225"] = blok.finland || ''
            locationValues["1112910"] = blok.great_britain || ''
            locationValues["1112912"] = blok.italy || ''
            locationValues["1616862"] = blok.kazakhstan || ''
            locationValues["1101813"] = blok.netherlands || ''
            locationValues["1120078"] = blok.norway || ''
            locationValues["1112911"] = blok.austria || ''
            locationValues["1101814"] = blok.poland || ''
            locationValues["1112909"] = blok.sweden || ''
            locationValues["1101815"] = blok.spain || ''
            locationValues["1101816"] = blok.czech_republic || ''
            locationValues["1221872"] = blok.turkey || ''
            locationValues["1101818"] = blok.hungary || ''
            locationValues["1101821"] = blok.usa || ''
            selectAttributes["25"] = locationValues

            let levelValues = {}
            levelValues["1246527"] = blok.apprentices || ''
            levelValues["1129862"] = blok.students || ''
            levelValues["1186754"] = blok.graduates || ''
            levelValues["1129863"] = blok.professionals || ''
            levelValues["1129864"] = blok.management || ''
            levelValues["1129865"] = blok.project_management_level || ''
            selectAttributes["20"] = levelValues

            let weitereValues = {}
            weitereValues["1246527"] = blok.azerbaijan || ''
            weitereValues["1616861"] = blok.belarus || ''
            weitereValues["1616863"] = blok.portugal || ''
            weitereValues["1616864"] = blok.saudi_arabia || ''
            weitereValues["1182491"] = blok.serbia || ''
            selectAttributes["25_1129870"] = weitereValues

            let switzerlandValues = {}
            switzerlandValues["1129867"] = blok.plateau || ''
            switzerlandValues["1098731"] = blok.eastern_switzerland || ''
            switzerlandValues["1129868"] = blok.ticino || ''
            switzerlandValues["1098732"] = blok.western_switzerland || ''
            switzerlandValues["1129869"] = blok.central_switzerland || ''
            switzerlandValues["1098734"] = blok.zurich || ''
            selectAttributes["25_1098730"] = switzerlandValues


            console.log(selectAttributes)
            setAttributes(selectAttributes)
        }
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

    // Set dependent value on location filter, applicable only for Switzerland and Weitere
    const setLocation = (e, typeFilter) => {
        if (e.target.value == "1098730") {
            const filterObject = {};
            filterObject[`25_${e.target.value}`] = ""
            console.log("filterObject", filterObject)
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
    }
    const changeDependentFilter = (e) => {
        const updatedValue = {}
        updatedValue[Object.keys(dependentFilter)[0]] = e.target.value

        setDependentFilter(updatedValue)
        filterJobs(e, Object.keys(dependentFilter)[0], e.target.value);
    }


    const filterJobs = async (e, typeFilter, dependentField) => {
        console.log("dependentField", dependentField)
        let dependentStringFilter = false;
        const newSelectedOptions = { ...selectedOptions };
        if (dependentField) {
            dependentStringFilter = `${typeFilter}:${dependentField}`
        } else if (Object.keys(dependentFilter)[0]) {
            console.log(dependentFilter, "dependentFilter", e)
            dependentStringFilter = `${Object.keys(dependentFilter)[0]}:${Object.values(dependentFilter)[0]}`
        }

        let filtersString = ''
        if (!dependentField) {
            newSelectedOptions[typeFilter] = e.target.value;
            setSelectedOptions(newSelectedOptions);
        } else if (dependentStringFilter) {
            filtersString += `${dependentStringFilter}`
        }
        console.log("newSelectedOptions", newSelectedOptions)

        Object.keys(newSelectedOptions).map((key) => {
            if (newSelectedOptions[key]) {
                if (filtersString.length) {
                    filtersString += `,`
                }
                filtersString += `${key}:${newSelectedOptions[key]}`;
            }
        })

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
                                value={selectedOptions["10"] ? selectedOptions["10"] : searchParams.get('10')}
                            >
                                <option value="">
                                    {blok.select_1_placeholder}
                                </option>
                                {attributes["10"] && Object.keys(attributes["10"]).map((key) => {
                                    return <option key={key} value={key} >
                                        {attributes["10"][key]}
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
                                value={selectedOptions["20"] ? selectedOptions["20"] : searchParams.get('20')}
                            >
                                <option value="">
                                    {blok.select_2_placeholder}
                                </option>
                                {attributes["20"] && Object.keys(attributes["20"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes["20"][key]}
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
                                onChange={(e) => { filterJobs(e, '25', false); setLocation(e, '25'); }}
                                value={selectedOptions["25"] ? selectedOptions["25"] : searchParams.get('25')}
                            >
                                <option value="">
                                    {blok.select_3_placeholder}
                                </option>
                                {attributes["25"] && Object.keys(attributes["25"]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes["25"][key]}
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
                                {dependentField && attributes[Object.keys(dependentFilter)[0]] && Object.keys(attributes[Object.keys(dependentFilter)[0]]).map((key) => {
                                    return <option key={key} value={key}>
                                        {attributes[Object.keys(dependentFilter)[0]][key]}
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