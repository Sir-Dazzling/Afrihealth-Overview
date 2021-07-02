import React from "react";
import Link from 'next/link';
import {
    FaFacebook,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaMediumM
} from "react-icons/fa";
import { ImSphere } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="bg-gray-100 px-4 lg:pt-16 sm:max-w-xl md:max-w-full sm:w-full focus-within md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6
            lg:px-24">
                <div className="md:max-w-md lg:col-span-2">
                    <Link href="/">
                        <div className="relative cursor-pointer">
                            <img
                                className="h-20"
                                src="/images/logo_alt.png" />
                            <p className="ml-16 text-base lg:text-lg tracking-wider">
                                the future of telehealth
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div className="space-y-5">
                        <p className="font-semibold tracking-wide text-xl lg:text-4xl">
                            Company
                        </p>
                        <ul className="mt-2 space-y-5">
                            <li>
                                <Link href="#">
                                    <p
                                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400
                                        cursor-pointer"
                                    >
                                        Contact
                                    </p>
                                </Link>

                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start space-y-5">
                        <div className="flex items-center space-x-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="/images/uk.jpeg" />
                            <span className="font-bold tracking-wide text-xl lg:text-4xl">Uk</span>
                        </div>
                        <span className="text-gray-500 text-sm lg:text-base">+44 20 3476 74 56</span>
                        <span className="text-gray-500 underline cursor-pointer text-sm lg:text-base">mailinfo@afri-health.com</span>
                        <span className="text-gray-500 text-sm lg:text-base">pinDept 1973, 196 Highroad,</span>
                        <span className="text-gray-500 text-sm lg:text-base">Wood Green, London. N22</span>
                        <span className="text-gray-500 text-sm lg:text-base">BHH United Kingdom</span>
                    </div>
                    <div className="flex flex-col items-start space-y-5">
                        <div className="flex items-center space-x-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="/images/nigeria.jpeg" />
                            <span className="font-semibold tracking-wide text-xl lg:text-4xl">Nigeria</span>
                        </div>
                        <span className="text-gray-500 text-sm lg:text-base">+234 80 6489 8353</span>
                        <span className="text-gray-500 underline cursor-pointer text-sm lg:text-base">mailinfo@afri-health.com</span>
                        <span className="text-gray-500 text-sm lg:text-base">pinDept 1973, 196 Highroad,</span>
                        <span className="text-gray-500 text-sm lg:text-base">12e Admiralty way, Lekki Phase 1</span>
                        <span className="text-gray-500 text-sm lg:text-base">Lagos, Nigeria</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:justify-between lg:items-center pt-5 pb-10 lg:flex-row lg:px-24 space-y-5 lg:space-y-0">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-x-3">
                    <img
                        className="h-16"
                        src="/images/logo_alt.png" />
                    <p className="text-base lg:text-lg tracking-wider">
                        © afri<span className="font-bold">health</span> International Ltd. {new Date().getFullYear()}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-10 space-y-5 sm:space-y-0">
                    <div className="flex space-x-5">
                        <FaFacebook className="text-gray-800" size={32} />
                        <FaYoutube
                            className="bg-gray-800 p-2 rounded-full cursor-pointer"
                            color="white"
                            size={32} />
                        <FaLinkedinIn
                            className="bg-gray-800 p-2 rounded-full cursor-pointer"
                            color="white"
                            size={32} />
                        <FaInstagram
                            className="bg-gray-800 p-2 rounded-full cursor-pointer"
                            color="white"
                            size={32} />
                        <FaTwitter
                            className="bg-gray-800 p-2 rounded-full cursor-pointer"
                            color="white"
                            size={32} />
                        <FaMediumM
                            className="bg-gray-800 p-2 rounded-full cursor-pointer"
                            color="white"
                            size={32} />
                    </div>
                    <div className="flex items-center space-x-3">
                        <ImSphere
                            className="cursor-pointer text-gray-800"
                            size={32} />
                        <p>English</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;