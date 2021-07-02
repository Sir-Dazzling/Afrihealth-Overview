import React, { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import {
    FaFacebook,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaMediumM
} from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <nav className="bg-gray-100 relative top-0 flex justify-between items-center
        px-2 md:px-10 lg:px-32 py-5">
                <Link href="/">
                    <img
                        src="/images/logo.png"
                        className="h-16 cursor-pointer" />
                </Link>

                <FiMenu
                    size={32}
                    className="bg-gray-200 p-1 cursor-pointer"
                    onClick={() => setOpenNav(true)} />
            </nav>

            {/* Popover menu */}
            {openNav && <div
                className="bg-gray-100 h-screen top-0 bottom-0 absolute z-10 left-1/2 transform -translate-x-1/2 px-2 w-screen sm:px-0 flex justify-between">
                <div className="hidden lg:block relative h-screen bg-purple-600 w-1/4 xl:w-1/5">
                    <img
                        src="/images/pills.png"
                        className="absolute top-20 left-28 lg:left-36 xl:left-44 right-0 lg:h-96 lg:w-96 rounded-3xl" />
                </div>
                <div className="flex flex-col w-full mx-2 lg:mx-0 lg:w-1/2 xl:w-7/12 h-screen">
                    <div className="self-end">
                        <CgClose
                            onClick={() => setOpenNav(false)}
                            className="bg-black  sm:mx-3 md:mx-5 lg:mx-20 my-3 md:my-12 p-2 rounded-lg
                cursor-pointer"
                            color="white"
                            size={42} />
                    </div>

                    <div className="flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:space-x-32">
                        <div className="flex flex-col space-y-10 items-start">
                            <Link href="/">
                                <span className="text-purple-700 text-3xl lg:text-4xl font-bold
                        cursor-pointer">
                                    home <sup>01</sup>
                                </span>
                            </Link>

                            <Link href="/about">
                                <span className="cursor-pointer text-3xl lg:text-4xl font-bold">
                                    about us <sup>02</sup>
                                </span>
                            </Link>

                            <span className="cursor-pointer text-3xl lg:text-4xl font-bold">
                                our product <sup>03</sup>
                            </span>
                            <span className="cursor-pointer text-3xl lg:text-4xl font-bold">
                                pricing <sup>04</sup>
                            </span>
                            <span className="cursor-pointer text-3xl lg:text-4xl font-bold">
                                contact us <sup>05</sup>
                            </span>
                            <div className="flex justify-between w-full
                        text-blue-500">
                                <span className="cursor-pointer">Privacy Policy</span>
                                <span className="cursor-pointer">Terms Of Use</span>
                            </div>
                            <div className="flex space-x-5">
                                <FaFacebook size={32} />
                                <FaYoutube
                                    className="bg-black p-2 rounded-full cursor-pointer"
                                    color="white"
                                    size={32} />
                                <FaLinkedinIn
                                    className="bg-black p-2 rounded-full cursor-pointer"
                                    color="white"
                                    size={32} />
                                <FaInstagram
                                    className="bg-black p-2 rounded-full cursor-pointer"
                                    color="white"
                                    size={32} />
                                <FaTwitter
                                    className="bg-black p-2 rounded-full cursor-pointer"
                                    color="white"
                                    size={32} />
                                <FaMediumM
                                    className="bg-purple-600 p-2 rounded-full cursor-pointer"
                                    color="white"
                                    size={32} />
                            </div>
                        </div>

                        <div className="bg-gray-100 flex lg:flex-col space-x-5 lg:space-x-0 lg:space-y-10
                    pb-5 w-full justify-between">
                            <div className="flex flex-col items-start space-y-5">
                                <div className="flex items-center space-x-1">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="/images/uk.jpeg" />
                                    <span className="text-2xl font-bold">Uk</span>
                                </div>
                                <span className="text-gray-500 text-sm lg:text-base">+44 20 3476 74 56</span>
                                <span className="text-gray-500 underline cursor-pointer text-sm lg:text-base">mailinfo@afri-health.com</span>
                                <span className="text-gray-500 text-sm lg:text-base">pinDept 1973, 196 Highroad,</span>
                                <span className="text-gray-500 text-sm lg:text-base">Wood Green, London. N22</span>
                                <span className="text-gray-500 text-sm lg:text-base">BHH United Kingdom</span>
                            </div>
                            <div className="flex flex-col items-start space-y-5">
                                <div className="flex items-center space-x-1">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="/images/nigeria.jpeg" />
                                    <span className="text-2xl font-bold">Nigeria</span>
                                </div>
                                <span className="text-gray-500 text-sm lg:text-base">+234 80 6489 8353</span>
                                <span className="text-gray-500 underline cursor-pointer text-sm lg:text-base">mailinfo@afri-health.com</span>
                                <span className="text-gray-500 text-sm lg:text-base">pinDept 1973, 196 Highroad,</span>
                                <span className="text-gray-500 text-sm lg:text-base">12e Admiralty way, Lekki Phase 1</span>
                                <span className="text-gray-500 text-sm lg:text-base">Lagos, Nigeria</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default NavBar;