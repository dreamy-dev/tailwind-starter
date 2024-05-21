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
    const [values, setValues] = useState({ 10: '', 25: '' });
    const [urlQuery, setUrlQuery] = useState('');
    const [attributes, setAttributes] = useState([]);
    const currentLocale = useCurrentLocale(i18nConfig);

    const changeChosenFilter = (value, property) => {
        const newValues = { ...values };
        newValues[property] = value;
        setValues(newValues);
        let query = '';
        Object.keys(newValues).forEach((key) => {
            if (newValues[key]) {
                query += `${key}=${newValues[key]}&`;
            }
        });

        setUrlQuery(query);
    };

    const getAttributes = async () => {
        const url = `/${currentLocale}/api/prospective-attributes?language=${blok.default_language}`;

        const checkConnection = await fetch(url);
        const attributes = await checkConnection.json();

        const selectAttributes = {};

        attributes?.attributes?.map((item) => {
            if (item?.id == '25') {
                let locationValues = {};

                locationValues['denmark'] = {
                    name: item.values['1120079'] || '',
                    value: 1120079,
                };
                locationValues['germany'] = {
                    name: item.values['1098735'] || '',
                    value: 1098735,
                };
                locationValues['finland'] = {
                    name: item.values['1223225'] || '',
                    value: 1223225,
                };
                locationValues['great_britain'] = {
                    name: item.values['1112910'] || '',
                    value: 1112910,
                };
                locationValues['italy'] = {
                    name: item.values['1112912'] || '',
                    value: 1112912,
                };
                locationValues['kazakhstan'] = {
                    name: item.values['1616862'] || '',
                    value: 1616862,
                };
                locationValues['netherlands'] = {
                    name: item.values['1101813'] || '',
                    value: 1101813,
                };
                locationValues['norway'] = {
                    name: item.values['1120078'] || '',
                    value: 1120078,
                };
                locationValues['austria'] = {
                    name: item.values['1112911'] || '',
                    value: 1112911,
                };
                locationValues['poland'] = {
                    name: item.values['1101814'] || '',
                    value: 1101814,
                };
                locationValues['sweden'] = {
                    name: item.values['1112909'] || '',
                    value: 1112909,
                };
                locationValues['switzerland'] = {
                    name: item.values['1098730'] || '',
                    value: 1098730,
                };
                locationValues['spain'] = {
                    name: item.values['1101815'] || '',
                    value: 1101815,
                };
                locationValues['czech_republic'] = {
                    name: item.values['1101816'] || '',
                    value: 1101816,
                };
                locationValues['turkey'] = {
                    name: item.values['1221872'] || '',
                    value: 1221872,
                };
                locationValues['hungary'] = {
                    name: item.values['1101818'] || '',
                    value: 1101818,
                };
                locationValues['usa'] = {
                    name: item.values['1101821'] || '',
                    value: 1101821,
                };
                locationValues['other'] = {
                    name: item.values['1129870'] || '',
                    value: 1129870,
                };

                selectAttributes['25'] = locationValues;
            }
            // sorting occupational fields
            if (item?.id == '10') {
                let berufsfeldValues = {};
                berufsfeldValues['project_management'] = {
                    name: item.values['1186757'] || '',
                    value: 1186757,
                };
                berufsfeldValues['purchasing'] = {
                    name: item.values['1077440'] || '',
                    value: 1077440,
                };
                berufsfeldValues['engineering'] = {
                    name: item.values['1077441'] || '',
                    value: 1077441,
                };
                berufsfeldValues['finance'] = {
                    name: item.values['1077442'] || '',
                    value: 1077442,
                };
                berufsfeldValues['human_resources'] = {
                    name: item.values['1077443'] || '',
                    value: 1077443,
                };
                berufsfeldValues['commissioning'] = {
                    name: item.values['1077444'] || '',
                    value: 1077444,
                };
                berufsfeldValues['it'] = {
                    name: item.values['1077445'] || '',
                    value: 1077445,
                };
                berufsfeldValues['commercial_professions'] = {
                    name: item.values['1077446'] || '',
                    value: 1077446,
                };
                berufsfeldValues['logistics'] = {
                    name: item.values['1077447'] || '',
                    value: 1077447,
                };
                berufsfeldValues['production'] = {
                    name: item.values['1077448'] || '',
                    value: 1077448,
                };
                berufsfeldValues['quality_management'] = {
                    name: item.values['1077450'] || '',
                    value: 1077450,
                };
                berufsfeldValues['sales_and_marketing'] = {
                    name: item.values['1077452'] || '',
                    value: 1077452,
                };

                selectAttributes['10'] = berufsfeldValues;
            }
        });

        setAttributes(selectAttributes);
    };

    useEffect(() => {
        if (blok.default_language !== 'unset') {
            getAttributes();
        } else {
            let selectAttributes = {};
            // If we are in one of 8 languages that are not present in Prospective
            // e.g. Poland, Hungary, Norway etc.
            // then we take the translations from the Storyblok component

            let berufsfeldValues = {};

            berufsfeldValues['project_management'] = {
                name: blok.project_management || '',
                value: 1186757,
            };
            berufsfeldValues['purchasing'] = {
                name: blok.purchasing || '',
                value: 1077440,
            };
            berufsfeldValues['engineering'] = {
                name: blok.engineering || '',
                value: 1077441,
            };
            berufsfeldValues['finance'] = {
                name: blok.finance || '',
                value: 1077442,
            };
            berufsfeldValues['human_resources'] = {
                name: blok.human_resources || '',
                value: 1077443,
            };
            berufsfeldValues['commissioning'] = {
                name: blok.commissioning || '',
                value: 1077444,
            };
            berufsfeldValues['it'] = { name: blok.it || '', value: 1077445 };
            berufsfeldValues['commercial_professions'] = {
                name: blok.commercial_professions || '',
                value: 1077446,
            };
            berufsfeldValues['logistics'] = {
                name: blok.logistics || '',
                value: 1077447,
            };
            berufsfeldValues['production'] = {
                name: blok.production || '',
                value: 1077448,
            };
            berufsfeldValues['quality_management'] = {
                name: blok.quality_management || '',
                value: 1077450,
            };
            berufsfeldValues['sales_and_marketing'] = {
                name: blok.sales_and_marketing || '',
                value: 1077452,
            };

            selectAttributes['10'] = berufsfeldValues;
            let locationValues = {};

            locationValues['denmark'] = {
                name: blok.denmark || '',
                value: 1120079,
            };
            locationValues['germany'] = {
                name: blok.germany || '',
                value: 1098735,
            };
            locationValues['finland'] = {
                name: blok.finland || '',
                value: 1223225,
            };
            locationValues['great_britain'] = {
                name: blok.great_britain || '',
                value: 1112910,
            };
            locationValues['italy'] = {
                name: blok.italy || '',
                value: 1112912,
            };
            locationValues['kazakhstan'] = {
                name: blok.kazakhstan || '',
                value: 1616862,
            };
            locationValues['netherlands'] = {
                name: blok.netherlands || '',
                value: 1101813,
            };
            locationValues['norway'] = {
                name: blok.norway || '',
                value: 1120078,
            };
            locationValues['austria'] = {
                name: blok.austria || '',
                value: 1112911,
            };
            locationValues['poland'] = {
                name: blok.poland || '',
                value: 1101814,
            };
            locationValues['sweden'] = {
                name: blok.sweden || '',
                value: 1112909,
            };
            locationValues['switzerland'] = {
                name: blok.switzerland || '',
                value: 1098730,
            };
            locationValues['spain'] = {
                name: blok.spain || '',
                value: 1101815,
            };
            locationValues['czech_republic'] = {
                name: blok.czech_republic || '',
                value: 1101816,
            };
            locationValues['turkey'] = {
                name: blok.turkey || '',
                value: 1221872,
            };
            locationValues['hungary'] = {
                name: blok.hungary || '',
                value: 1101818,
            };
            locationValues['usa'] = { name: blok.usa || '', value: 1101821 };
            locationValues['other'] = {
                name: blok.other || '',
                value: 1129870,
            };

            selectAttributes['25'] = locationValues;

            setAttributes(selectAttributes);
        }
    }, []);

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
                                    onChange={(e) =>
                                        changeChosenFilter(e.target.value, '10')
                                    }
                                >
                                    <option value="">
                                        {blok.first_select_placeholder}
                                    </option>
                                    {attributes['10'] &&
                                        Object.values(attributes['10']).map(
                                            (value) => {
                                                return (
                                                    <option
                                                        key={value.value}
                                                        value={value.value}
                                                    >
                                                        {value.name}
                                                    </option>
                                                );
                                            }
                                        )}
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
                                    onChange={(e) =>
                                        changeChosenFilter(e.target.value, '25')
                                    }
                                >
                                    <option value="">
                                        {blok.second_select_placeholder}
                                    </option>
                                    {attributes['25'] &&
                                        Object.values(attributes['25']).map(
                                            (value) => {
                                                return (
                                                    <option
                                                        key={value.value}
                                                        value={value.value}
                                                    >
                                                        {value.name}
                                                    </option>
                                                );
                                            }
                                        )}
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <ButtonPrimary
                                href={`${ButtonUrlRenderer(blok?.search_button_link)}?${urlQuery}`}
                                buttonText={blok.search_button_text}
                            />
                        </div>
                    </form>
                </div>
            </SmallWidth>
        </section>
    );
};

export default HeroCareer;
