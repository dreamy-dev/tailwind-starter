'use client';

import SmallWidth from '../layouts/SmallWidth';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import { useState } from 'react';

export default function ContactForm({ blok }) {
    const [first_name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zip, setZIP] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch('/en/api/send', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log('falling over');
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message']);

            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert('Error, please try resubmitting the form');
        }
    }

    return (
        <section
            className="pb-5 lg:pb-24 bg-white"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <div className="col-span-12">
                    <form className="" onSubmit={handleSubmit}>
                        <H2>Kontaktformular</H2>
                        <div className="relative z-0 w-full mb-5 group">
                            <label
                                htmlFor="subject"
                                className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Betreff *
                            </label>
                            <input
                                className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                name="subject"
                                id="subject"
                                autoComplete="subject"
                                value={subject}
                                type="text"
                                placeholder=""
                                required
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap mb-5">
                            {/* <div className="flex items-center me-4">
                                <input
                                    id="red-radio"
                                    type="radio"
                                    value=""
                                    name="colored-radio"
                                    className=" w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                                />
                                <label
                                    htmlFor="red-radio"
                                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                                >
                                    Herr
                                </label>
                            </div>
                            <div className="flex items-center me-4">
                                <input
                                    id="green-radio"
                                    type="radio"
                                    value=""
                                    name="colored-radio"
                                    className=" w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                                />
                                <label
                                    htmlFor="green-radio"
                                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                                >
                                    Frau
                                </label>
                            </div> */}
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="first_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Vorname *
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="first_name"
                                    value={first_name}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                    placeholder=""
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nachname *
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    value={last_name}
                                    className="block p-3 w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                    placeholder=""
                                    required
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Strasse *
                                </label>
                                <input
                                    name="street"
                                    id="street"
                                    autoComplete="street"
                                    value={street}
                                    type="text"
                                    placeholder=""
                                    required
                                    onChange={(e) => setStreet(e.target.value)}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nr. *
                                </label>
                                <input
                                    name="number"
                                    id="number"
                                    autoComplete="number"
                                    value={number}
                                    type="text"
                                    placeholder=""
                                    required
                                    onChange={(e) => setNumber(e.target.value)}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    PLZ *
                                </label>
                                <input
                                    name="zip"
                                    id="zip"
                                    autoComplete="zip"
                                    value={zip}
                                    type="text"
                                    placeholder=""
                                    required
                                    onChange={(e) => setZIP(e.target.value)}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Ort *
                                </label>
                                <input
                                    name="city"
                                    id="city"
                                    autoComplete="city"
                                    value={city}
                                    type="text"
                                    placeholder=""
                                    required
                                    onChange={(e) => setCity(e.target.value)}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_phone"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email *
                                </label>
                                <input
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={email}
                                    type="text"
                                    placeholder=""
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="floating_company"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Telefon *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    value={phone}
                                    placeholder=""
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Bemerkung *
                            </label>
                            <textarea
                                rows={6}
                                name="message"
                                id="message"
                                value={message}
                                type="text"
                                placeholder=""
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            ></textarea>
                        </div>
                        <div className="flex items-start mb-8">
                            <input
                                className="relative shrink-0 w-6 h-6 border-2 border-primary  bg-whitefocus:ring-primary checked:bg-primary checked:border-primary"
                                type="checkbox"
                            />
                            <label
                                htmlFor="checkbox-1"
                                className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                            >
                                Mit dem Absenden dieses Formulars erklären Sie
                                sich damit einverstanden, dass Stadler Ihre
                                personenbezogenen Daten für den internen
                                Gebrauch in Übereinstimmung mit unserer{' '}
                                <a
                                    href="#"
                                    className="text-gray-500 hover:underline cursor-pointer break-words"
                                >
                                    Datenschutzerklärung
                                </a>{' '}
                                und mit sicheren technischen Mitteln sammelt und
                                verarbeitet.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                        >
                            {loading ? (
                                <div
                                    style={{
                                        borderTopColor: 'transparent',
                                    }}
                                    className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
                                ></div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        {/* <ButtonPrimary
                            href="#"
                            position="left"
                            buttonText="Senden"
                        ></ButtonPrimary> */}
                    </form>
                </div>
            </SmallWidth>
        </section>
    );
}
