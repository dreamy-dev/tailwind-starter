'use client';
import { useState, useEffect } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import H1 from '../../components/typography/H1';
import Text from '../../components/typography/Text';
import SmallWidth from '../layouts/SmallWidth';
import { PinIcon } from '../icons/PinIcon';
import { CalenderIcon } from '../icons/CalenderIcon';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

const HeroCareer = ({ blok }) => {
    const [values, setValues] = useState({ 10: "", 25: "" });
    const [urlQuery, setUrlQuery] = useState("");
    const [attributes, setAttributes] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig);

    const changeChosenFilter = (value, property) => {
        const newValues = { ...values }
        newValues[property] = value
        setValues(newValues)
        let query = ""
        Object.keys(newValues).forEach(key => {
            if (newValues[key]) {
                query += `${key}=${newValues[key]}&`
            }
        })

        setUrlQuery(query)
    }


    const getAttributes = async () => {

        const url = `/${currentLocale}/api/prospective-attributes?language=${currentLocale}`;

        const checkConnection = await fetch(url);
        const attributes = await checkConnection.json()

        const selectAttributes = {}

        attributes?.attributes?.map(item => {
            selectAttributes[item.id] = { values: item.values, name }
        })

        setAttributes(selectAttributes)

    };
    useEffect(() => {
        getAttributes()

    }, [])

    return (
        <section
            {...storyblokEditable(blok)}
            style={{
                backgroundImage: `url(${blok?.background_image.filename})`,
            }}
            className="bg-no-repeat bg-cover bg-center bg-gray-400 bg-blend-multiply"
        >
            <SmallWidth>
                <div className="py-16 lg:py-24 col-span-12 relative mx-auto max-w-screen-xl text-white lg:pt-80 lg:pb-12 xl:px-0 z-1">
                    <div className="mb-6 max-w-screen-md lg:mb-0 text-white">
                        <H1>{blok?.title}</H1>
                        <div className="my-8 lg:mb-8">
                            <Text>{blok?.subheading}</Text>
                        </div>
                    </div>
                    <form
                        action="#"
                        className="flex justify-between flex-col gap-4 lg:flex-row p-4 mt-16 mb-5 w-full bg-white lg:gap-x-4 lg:grid-cols-5 lg:mt-9 dark:bg-gray-800"
                    >
                        <div className="flex-grow gap-x-4 ">
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <CalenderIcon
                                        color="#00000080"
                                        styles="w-5 h-5"
                                    />
                                </div>
                                <select
                                    className="bg-greySolid-30 border rounded border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                                    onChange={(e) => (changeChosenFilter(e.target.value, "10"))}
                                >
                                    <option value="">
                                        {blok.first_select_placeholder}
                                    </option>
                                    {attributes["10"] && attributes["10"]["values"] && Object.keys(attributes["10"]["values"]).map((key) => {
                                        return <option key={key} value={key}>
                                            {attributes["10"]["values"][key]}
                                        </option>
                                    })}

                                </select>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <label className="sr-only">Location</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <PinIcon
                                        color="#00000080"
                                        styles="w-5 h-5"
                                    />
                                </div>
                                <select
                                    className="bg-greySolid-30 border rounded border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                                    onChange={(e) => changeChosenFilter(e.target.value, "25")}
                                >
                                    <option value="">
                                        {blok.second_select_placeholder}
                                    </option>
                                    {attributes["25"] && attributes["25"]["values"] && Object.keys(attributes["25"]["values"]).map((key) => {
                                        return <option key={key} value={key}>
                                            {attributes["25"]["values"][key]}
                                        </option>
                                    })}

                                </select>
                            </div>
                        </div>
                        <div className="">
                            <ButtonPrimary href={`${ButtonUrlRenderer(blok.search_button_link)}?${urlQuery}`} buttonText={blok.search_button_text} />
                        </div>
                    </form>
                </div>
            </SmallWidth>
        </section>
    );
};

export default HeroCareer;
