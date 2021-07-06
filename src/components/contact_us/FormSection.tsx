import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FormSection = () => {
    let [partnerDropdown, setPartnerDropdown] = useState(false);
    let [partnerError, setPartnerError] = useState(true);
    return (
        <div className="bg-gray-normal flex flex-col lg:flex-row px-2 md:px-10 lg:px-32 py-16 space-y-10 lg:space-y-10 lg:space-x-10">
            <div className="bg-white px-5 py-10 lg:w-2/3 lg:px-32">
                <img
                    className="h-16"
                    src="/images/logo.png" />

                <div className="bg-white lg:w-full rounded-3xl space-y-10 
            py-8">
                    <div className="relative">
                        <p className="text-3xl lg:text-6xl tracking-wider font-bold">
                            Get in Touch
                        </p>
                    </div>
                    <div className="grid grid-cols-6 gap-3">
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
                                    Country
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
                        {partnerError && <p className="text-red-500">Please select a country</p>}
                    </div>
                    <div>
                        <input
                            placeholder="Phone number*"
                            type="text"
                            name="phoneno"
                            id="email"
                            autoComplete="given-name"
                            className="border-black border-b-2 pb-3 placeholder-black
                        text-xl w-full"/>
                    </div>
                    <div>
                        <input
                            placeholder="Company*"
                            type="text"
                            name="phoneno"
                            id="email"
                            autoComplete="given-name"
                            className="border-black border-b-2 pb-3 placeholder-black
                        text-xl w-full"/>
                    </div>
                    <div className="pt-20">
                        <input
                            placeholder="Your Request"
                            type="text"
                            name="phoneno"
                            id="email"
                            autoComplete="given-name"
                            className="border-black border-b-2 pb-3 placeholder-black
                        text-xl w-full"/>
                    </div>
                    <p>By proceding, you agree to the <span 
                    className="text-blue-normal underline cursor-pointer">
                        Terms and Conditions</span></p>
                    <div className="flex items-center space-x-3 cursor-pointer lg:pb-10">
                        <span className="text-blue-normal text-lg lg:text-xl tracking-wider">
                            send request
                        </span>
                        <FaChevronRight
                            className="text-blue-normal"
                            size={18} />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3">
                <img
                    src="/images/contact_us/5.png" />
            </div>
        </div>
    );
};

export default FormSection;