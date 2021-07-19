import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';

const SpecialistForm = () => {
    let [specialistDropdown, setSpecialistDropdown] = useState(false);
    let [partnerDropdown, setPartnerDropdown] = useState(false);
    let [partnerError, setPartnerError] = useState(true);

    return (
        <div className="bg-gray-100 flex flex-col lg:flex-row justify-between 
        px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround">
            <Slide left>
                <div className="bg-blue-normal lg:w-1/2 rounded-3xl space-y-10 
            py-8 px-5 lg:px-10">
                    <p className="text-xl lg:text-4xl tracking-wider text-white font-bold">
                        Affliates
                    </p>
                    <img src="/images/africa.png" />
                    <div className="space-y-3 text-white text-xl lg:text-4xl tracking-wider
                font-bold">
                        <p>we will love to partners and</p>
                        <p>specialist around the continent</p>
                    </div>
                    <div className="text-white text-lg lg:text-xl tracking-wider">
                        we are onboarding doctors to work with our clients across various
                        platforms and service we offer, you can join our team and be a force
                        for good while earning on your dawn time.
                    </div>
                </div>
            </Slide>

            <Slide right>
                <div className="bg-white lg:w-1/2 rounded-3xl space-y-10 
            py-8 px-5 lg:px-10">
                    <div className="relative">
                        <div
                            onClick={() => setSpecialistDropdown(!specialistDropdown)}
                            className="flex items-center justify-between border-b-2 border-black
                pb-5 cursor-pointer">
                            <p className="text-xl lg:text-4xl tracking-wider font-bold">
                                are you a specialist?
                            </p>
                            <FaChevronDown
                                size={24} />
                        </div>
                        {specialistDropdown &&
                            <div>
                                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tab-index="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                    <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                        <span className="font-normal ml-3 block truncate">
                                            yes
                                        </span>
                                    </li>
                                    <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                        <span className="font-normal ml-3 block truncate">
                                            no
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <input
                                placeholder="First Name *"
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                className="border-black border-b-2 pb-3 placeholder-black
                        text-xl"/>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <input
                                placeholder="Last Name *"
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="given-name"
                                className="border-black border-b-2 pb-3 placeholder-black
                        text-xl w-full"/>
                        </div>
                    </div>
                    <div>
                        <input
                            placeholder="Email Address*"
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="given-name"
                            className="border-black border-b-2 pb-3 placeholder-black
                        text-xl w-full"/>
                    </div>
                    <div className="space-y-3">
                        <div className="relative">
                            <div
                                onClick={() => setPartnerDropdown(!partnerDropdown)}
                                className="flex items-center justify-between border-b-2 border-black
                pb-5 cursor-pointer">
                                <p className="text-lg lg:text-xl tracking-wider">
                                    Are you looking to partner or get updates?
                                </p>
                                <FaChevronDown
                                    size={24} />
                            </div>
                            {partnerDropdown &&
                                <div>
                                    <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tab-index="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                            <span className="font-normal ml-3 block truncate">
                                                yes
                                            </span>
                                        </li>
                                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                            <span className="font-normal ml-3 block truncate">
                                                no
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {partnerError && <p className="text-red-500">Please select an option from the dropdown menu</p>}
                    </div>
                    <p>By submitting this form, I acknowledge receipt of the Glovaro&apos;s Privacy Policy</p>
                    <div className="flex items-center space-x-3 cursor-pointer lg:pb-10">
                        <span className="text-blue-normal text-lg lg:text-xl tracking-wider">
                            register
                        </span>
                        <FaChevronRight
                            className="text-blue-normal"
                            size={18} />
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default SpecialistForm;