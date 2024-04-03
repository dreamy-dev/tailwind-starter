'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import ContentWidth from '../layouts/ContentWidth';
import SmallWidth from '../layouts/SmallWidth';
import H4 from '../typography/H4';

const jobs = [
    {
        job: 'Elektriker:in im Servicebereich weltweit – Erlen',
    },
    {
        job: 'Elektriker:in im Servicebereich weltweit – Erlen',
    },
    {
        job: 'Elektriker:in im Servicebereich weltweit – Erlen',
    },
];

const JobOverview = ({ blok }) => (
    <section className="mt-12">
        <SmallWidth>
            <form className="grid col-span-12 grid-cols-12 my-8">
                <div className="grid col-span-12">
                    <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Suchbegriff
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                    />
                </div>
                <div className="grid col-span-12 grid-cols-12 gap-6 mt-4">
                    <div class="grid col-span-4">
                        <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Berufsfeld
                        </label>
                        <select
                            id="countries"
                            class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Alle</option>
                            <option value="US">Engineering</option>
                            <option value="CA">Logistik</option>
                            <option value="FR">Produktion</option>
                        </select>
                    </div>
                    <div class="grid col-span-4">
                        <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Level
                        </label>
                        <select
                            id="countries"
                            class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Alle</option>
                            <option value="US">Lernende</option>
                            <option value="CA">Praktikanten</option>
                            <option value="FR">Berufserfahrene</option>
                            <option value="FR">Führungsfunktion</option>
                        </select>
                    </div>
                    <div class="grid col-span-4">
                        <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Arbeitsort
                        </label>
                        <select
                            id="countries"
                            class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Alle</option>
                            <option value="US">Schweiz</option>
                            <option value="CA">Deutschland</option>
                            <option value="FR">Europa</option>
                        </select>
                    </div>
                </div>
            </form>

            <div className="grid col-span-12">
                <div
                    class="grid grid-flow-col justify-stretch shadow-sm hover:cursor-pointer mb-4"
                    role="group"
                >
                    <a
                        type="button"
                        class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Spontanbewerbung
                    </a>
                    <a
                        type="button"
                        class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Personalvermittler
                    </a>
                    <a
                        type="button"
                        class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Mein Profil
                    </a>
                    <a
                        type="button"
                        class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Jobabo
                    </a>
                </div>
            </div>

            <div className="grid col-span-12">
                <div className="divide-y">
                    {jobs.map((item) => (
                        <div className="py-4 hover:cursor-pointer hover:text-primary">
                            <H4>{item.job}</H4>
                            <div className="flex">
                                <div className="mr-4 flex items-center">
                                    <span>
                                        <img
                                            className="w-3 h-3 mr-1"
                                            src="/ohne-box/location.svg"
                                            alt=""
                                        />
                                    </span>
                                    <p>Bussnang</p>
                                </div>
                                <div className="mr-4 flex items-center">
                                    <span>
                                        <img
                                            className="w-3 h-3 mr-1"
                                            src="/ohne-box/schedule.svg"
                                            alt=""
                                        />
                                    </span>
                                    <p>Vollzeit</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SmallWidth>
    </section>
);

export default JobOverview;
