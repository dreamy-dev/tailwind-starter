'use client';

import SmallWidth from '../layouts/SmallWidth';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import { useState, useEffect } from 'react';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
import RichTextRenderer from '../helpers/RichTextRenderer';
import H3 from '../typography/H3';
import debounce from '../helpers/Debounce';

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
    const [data_protection, setDataProtection] = useState(false);
    const [gender, setGender] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [validationSubscribedError, setValidationSubscribedError] =
        useState(false);
    const [validationSuccess, setValidationSuccess] = useState(false);
    const [errors, setErrors] = useState({
        first_name: false,
        last_name: false,
        subject: false,
        street: false,
        number: false,
        zip: false,
        city: false,
        email: false,
        phone: false,
        message: false,
        data_protection: false,
    });

    const currentLocale = useCurrentLocale(i18nConfig);

    const sendForm = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('street', street);
        formData.append('number', number);
        formData.append('zip', zip);
        formData.append('city', city);
        formData.append('phone', phone);
        formData.append('message', message);
        formData.append('data_protection', data_protection);
        formData.append('gender', gender);

        try {
            const response = await fetch(`/${currentLocale}/api/send`, {
                method: 'post',
                body: formData,
            });

            const responseData = await response.json();

            if (responseData.data.id) {
                setValidationSuccess(true);
                setValidationError(false);
                setValidationSubscribedError(false);
                console.log('Message successfully sent');
                return false;
            } else {
                setValidationSuccess(false);
                setValidationError(true);
                setValidationSubscribedError(response.status === 400);
                console.log('An error occurred, please try again later.');
                return false;
            }
        } catch (err) {
            console.error('Submission failed:', err);
            setValidationSuccess(false);
            setValidationError(true);
            setValidationSubscribedError(false);
            console.log('An error occurred, please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Debounced validation functions
    const debouncedValidateFirstName = debounce(() => {
        const hasError = blok?.required_first_name && !first_name.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            first_name: hasError,
        }));
    }, 300);

    const debouncedValidateSubject = debounce(() => {
        const hasError = blok?.required_subject && !subject.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            subject: hasError,
        }));
    }, 300);

    const debouncedValidateLastName = debounce(() => {
        const hasError = blok?.required_last_name && !last_name.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            last_name: hasError,
        }));
    }, 300);

    const debouncedValidateEmail = debounce(() => {
        const valid = /\S+@\S+\.\S+/.test(email);
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: blok?.required_email && !valid,
        }));
    }, 300);

    const debouncedValidateStreet = debounce(() => {
        const hasError = blok?.required_street && !street.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            street: hasError,
        }));
    }, 300);

    const debouncedValidateNumber = debounce((value) => {
        const hasError = blok?.required_number && value === '';
        setErrors((prevErrors) => ({
            ...prevErrors,
            number: hasError,
        }));
        setNumber(value);
    }, 300);

    const debouncedValidateZip = debounce(() => {
        const hasError = blok?.required_zip && !zip.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            zip: hasError,
        }));
    }, 300);

    const debouncedValidateCity = debounce(() => {
        const hasError = blok?.required_city && !city.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            city: hasError,
        }));
    }, 300);

    const debouncedValidatePhone = debounce(() => {
        const phonePattern = /^\+?(\d[-.\s]?){7,14}\d$/;
        const valid = phonePattern.test(phone);
        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: blok?.required_phone && !valid,
        }));
    }, 300);

    const debouncedValidateMessage = debounce(() => {
        const hasError = blok?.required_message && !message.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            message: hasError,
        }));
    }, 300);

    const validateCheckbox = (isChecked) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            data_protection: blok?.dataprotection_required ? !isChecked : false,
        }));
    };

    const validateForm = async () => {
        const newErrors = {
            first_name: blok?.required_first_name ? !first_name.trim() : false,
            last_name: blok?.required_last_name ? !last_name.trim() : false,
            email: blok?.required_email ? !/\S+@\S+\.\S+/.test(email) : false,
            phone: blok?.required_phone
                ? !/^\+?(\d[-.\s]?){7,14}\d$/.test(phone)
                : false,
            subject: blok?.required_subject ? !subject.trim() : false,
            street: blok?.required_street ? !street.trim() : false,
            number: blok?.required_number ? !number.trim() : false,
            zip: blok?.required_zip ? !zip.trim() : false,
            city: blok?.required_city ? !city.trim() : false,
            message: blok?.required_message ? !message.trim() : false,
            data_protection: blok?.dataprotection_required
                ? !data_protection
                : false,
        };

        setErrors(newErrors);

        const isFormValid = !Object.values(newErrors).some(
            (isError) => isError
        );

        if (isFormValid) {
            console.log('Form is valid, sending form...');
            await sendForm();
        } else {
            console.log('Form is not valid, errors need to be corrected.');
        }

        return isFormValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
    };

    return (
        <section
            className="pb-5 lg:pb-24 bg-white"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <div className="col-span-12">
                    <form
                        noValidate
                        className="relative"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <H2>{blok?.title}</H2>
                        <div className="relative z-0 w-full mb-5 group">
                            <label
                                htmlFor="subject"
                                className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                {blok?.label_subject}{' '}
                                {blok?.required_subject ? '*' : ''}
                            </label>
                            <input
                                className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                name="subject"
                                id="subject"
                                autoComplete="subject"
                                value={subject}
                                type="text"
                                placeholder=""
                                required={blok?.required_subject ? true : false}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    debouncedValidateSubject();
                                }}
                                onBlur={debouncedValidateSubject}
                            />
                            <div
                                className={`${errors.subject ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                            >
                                {blok.subject_error}
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-5">
                            <div className="flex items-center me-4">
                                <input
                                    id="male"
                                    type="radio"
                                    value="male"
                                    name="gender"
                                    className="w-4 h-4 text-primary bg-gray-100 border-greySolid-400 focus:ring-primary focus:ring-2"
                                    onChange={(e) => setGender(e.target.value)}
                                    onBlur={(e) => setGender(e.target.value)}
                                />
                                <label
                                    htmlFor="male"
                                    className="ms-2 text-sm font-medium text-greySolid-800 dark:text-gray-300"
                                >
                                    {blok?.gender_male}
                                </label>
                            </div>
                            <div className="flex items-center me-4">
                                <input
                                    id="female"
                                    type="radio"
                                    value="female"
                                    name="gender"
                                    className="w-4 h-4 text-primary bg-gray-100 border-greySolid-400 focus:ring-primary focus:ring-2"
                                    onChange={(e) => setGender(e.target.value)}
                                    onBlur={(e) => setGender(e.target.value)}
                                />
                                <label
                                    htmlFor="female"
                                    className="ms-2 text-sm font-medium text-greySolid-800 dark:text-gray-300"
                                >
                                    {blok?.gender_female}
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="first_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_first_name}{' '}
                                    {blok?.required_first_name ? '*' : ''}
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="first_name"
                                    value={first_name}
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                    placeholder=""
                                    required={
                                        blok?.required_first_name ? true : false
                                    }
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        debouncedValidateFirstName();
                                    }}
                                    onBlur={debouncedValidateFirstName}
                                />
                                <div
                                    className={`${errors.first_name ? 'block' : 'hidden'} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.first_name_error}
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="last_name"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_last_name}{' '}
                                    {blok?.required_last_name ? '*' : ''}
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    value={last_name}
                                    className="block p-3 w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                    placeholder=""
                                    required={
                                        blok?.required_last_name ? true : false
                                    }
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        debouncedValidateLastName();
                                    }}
                                    onBlur={debouncedValidateLastName}
                                />
                                <div
                                    className={`${errors.last_name ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.last_name_error}
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="street"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_street}{' '}
                                    {blok?.required_street ? '*' : ''}
                                </label>
                                <input
                                    name="street"
                                    id="street"
                                    autoComplete="street"
                                    value={street}
                                    type="text"
                                    placeholder=""
                                    required={
                                        blok?.required_street ? true : false
                                    }
                                    onChange={(e) => {
                                        setStreet(e.target.value);
                                        debouncedValidateStreet();
                                    }}
                                    onBlur={debouncedValidateStreet}
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                                <div
                                    className={`${errors.street && blok?.required_street ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.street_error}
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="number"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_nr}{' '}
                                    {blok?.required_number ? '*' : ''}
                                </label>
                                <input
                                    name="number"
                                    id="number"
                                    autoComplete="number"
                                    value={number}
                                    type="number"
                                    placeholder=""
                                    required={
                                        blok?.required_number ? true : false
                                    }
                                    onChange={(e) => {
                                        setNumber(e.target.value);
                                        debouncedValidateNumber(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateNumber(e.target.value)
                                    }
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                                <div
                                    className={`${errors.number && blok?.required_number ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.number_error}
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="zip"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_zip}{' '}
                                    {blok?.required_zip ? '*' : ''}
                                </label>
                                <input
                                    name="zip"
                                    id="zip"
                                    autoComplete="zip"
                                    value={zip}
                                    type="text"
                                    placeholder=""
                                    required={blok?.required_zip ? true : false}
                                    onChange={(e) => {
                                        setZIP(e.target.value);
                                        debouncedValidateZip();
                                    }}
                                    onBlur={debouncedValidateZip}
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                                <div
                                    className={`${errors.zip && blok?.required_zip ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.zip_error}
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="city"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_city}{' '}
                                    {blok?.required_city ? '*' : ''}
                                </label>
                                <input
                                    name="city"
                                    id="city"
                                    autoComplete="city"
                                    value={city}
                                    type="text"
                                    placeholder=""
                                    required={
                                        blok?.required_city ? true : false
                                    }
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                        debouncedValidateCity();
                                    }}
                                    onBlur={debouncedValidateCity}
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                                <div
                                    className={`${errors.city && blok?.required_city ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.city_error}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_email}{' '}
                                    {blok?.required_email ? '*' : ''}
                                </label>
                                <input
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={email}
                                    type="email"
                                    placeholder=""
                                    required={
                                        blok?.required_email ? true : false
                                    }
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        debouncedValidateEmail();
                                    }}
                                    onBlur={debouncedValidateEmail}
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                                <div
                                    className={`${errors.email && blok?.required_email ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.email_error}
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="phone"
                                    className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {blok?.label_phone}{' '}
                                    {blok?.required_phone ? '*' : ''}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    value={phone}
                                    placeholder=""
                                    required={
                                        blok?.required_phone ? true : false
                                    }
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        debouncedValidatePhone();
                                    }}
                                    onBlur={debouncedValidatePhone}
                                    className="block p-3  w-full text-sm text-greySolid-800 bg-white  border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                                />
                                <div
                                    className={`${errors.phone && blok?.required_phone ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                                >
                                    {blok.phone_error}
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="peer-focus:font-medium  mb-2 text-sm font-medium text-greySolid-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                {blok?.label_message}{' '}
                                {blok?.required_message ? '*' : ''}
                            </label>
                            <textarea
                                rows={6}
                                name="message"
                                id="message"
                                value={message}
                                type="text"
                                placeholder=""
                                required={blok?.required_message ? true : false}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    debouncedValidateMessage();
                                }}
                                onBlur={debouncedValidateMessage}
                                className="block p-2.5 w-full text-sm text-greySolid-800 bg-white border border-greySolid-400 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            ></textarea>
                            <div
                                className={`${errors.message && blok?.required_message ? 'block ' : 'hidden '} mt-2 mb-2 text-sm text-red-700 font-medium`}
                            >
                                {blok.message_error}
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <div className="flex items-center">
                                <input
                                    className="relative shrink-0 w-6 h-6 border-2 border-primary checked:bg-primary hover:checked:bg-primary checked:border-primary focus:checked:bg-primary hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary"
                                    type="checkbox"
                                    name="data_protection"
                                    id="data_protection"
                                    defaultChecked={data_protection}
                                    onChange={(e) => {
                                        setDataProtection(e.target.checked);
                                        validateCheckbox(e.target.checked);
                                    }}
                                />
                                <label
                                    htmlFor="data_protection"
                                    className="ml-2 text-sm font-medium text-black dark:text-gray-300"
                                >
                                    <RichTextRenderer
                                        text={blok.disclaimer_text}
                                        customStyles="!text-sm !my-0"
                                    />
                                </label>
                            </div>
                            <div
                                className={`${errors.data_protection ? 'block' : 'hidden'} mt-2 text-sm text-red-700 font-medium`}
                            >
                                {blok.checkbox_error}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                        >
                            {loading ? (
                                <div
                                    style={{
                                        borderTopColor: 'transparent',
                                    }}
                                    className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
                                ></div>
                            ) : (
                                blok?.submit_button_text
                            )}
                        </button>
                        <div
                            className={`${validationError ? 'block ' : 'hidden '} mt-4 mb-2 text-sm text-red-700 font-medium`}
                        >
                            {validationSubscribedError
                                ? blok.error_email_exists
                                : blok.global_validation_error}
                        </div>
                        {validationSuccess && (
                            <div className="top-0 left-0 absolute bg-white w-full h-full items-center flex flex-wrap content-center align-center justify-center text-md">
                                <div className="w-full text-center">
                                    <H3>{blok.global_validation_success}</H3>
                                </div>
                                <div className="w-2/3 text-center">
                                    <RichTextRenderer
                                        text={
                                            blok?.global_validation_success_description
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </SmallWidth>
        </section>
    );
}
