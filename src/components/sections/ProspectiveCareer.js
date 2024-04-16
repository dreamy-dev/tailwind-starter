import { useState, useEffect } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H4 from '../typography/H4';
import H2 from '../typography/H2';
const ProspectiveCareer = ({ blok }) => {

    const [jobs, setJobs] = useState([]);
    const [attributes, setAttributes] = useState([]);

    const getJobs = async () => {

        const url = 'api/prospective-jobs';

        const checkConnection = await fetch(url);

        const data = await checkConnection.json()

        setJobs(data.message.jobs)

    };
    const getAttributes = async () => {

        const url = 'api/prospective-attributes';

        const checkConnection = await fetch(url);

        const attributes = await checkConnection.json()

        const selectAttributes = {}

        attributes.attributes.attributes.map(item => {
            selectAttributes[item.id] = { values: item.values, name: name }
        })

        setAttributes(selectAttributes)

    };
    useEffect(() => {
        getJobs()
        getAttributes()

    }, [])
    return (
        <section className="mt-12" {...storyblokEditable(blok)}>
            <SmallWidth>
                <div className="mt-8">
                    <H2>Übersicht der offenen Stellen</H2>
                </div>

                <div className="grid col-span-12 grid-cols-12 my-8 mb-12">
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
                            // onChange={(e) => filterArticles(e, 'country')}
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
                            {/* <select
                                id="countries"
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Alle</option>
                                <option value="US">Engineering</option>
                                <option value="CA">Logistik</option>
                                <option value="FR">Produktion</option>
                            </select> */}
                        </div>
                        <div className="grid col-span-6">
                            <label
                                for="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Level
                            </label>
                            <select
                                id="countries"
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Alle</option>
                                <option value="US">Lernende</option>
                                <option value="CA">Praktikanten</option>
                                <option value="FR">Berufserfahrene</option>
                                <option value="FR">Führungsfunktion</option>
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
                                id="countries"
                                className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Alle</option>
                                <option value="US">Schweiz</option>
                                <option value="CA">Deutschland</option>
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
                                disabled
                                id="countries_disabled"
                                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>-</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
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