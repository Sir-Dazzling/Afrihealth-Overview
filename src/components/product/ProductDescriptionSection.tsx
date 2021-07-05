import React from 'react';
import { FaApple, FaChevronCircleRight, FaChevronRight } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Link from 'next/link';

const ProductDescriptionSection = () => {
    return (
        <div className="bg-purple-800 flex flex-col space-y-0 lg:space-y-0 justify-between px-2 md:px-10 py-5 lg:px-12 lg:py-10 text-white lg:mx-32 rounded-xl">
            <p className="font-bold text-xl lg:text-4xl tracking-wider">Rigour</p>
            <div className="relative flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:justify-between lg:items-center">
                <div className="space-y-10">
                    <p className="font-bold text-xl lg:text-6xl tracking-wider">packed with special</p>
                    <p className="font-bold text-xl lg:text-6xl tracking-wider">features in mind</p>
                    <div className='space-y-3'>
                        <p className="text-xl lg:text-3xl tracking-wider">
                            the rigour app is your one stop for telehealth
                        </p>
                        <p className="text-xl lg:text-3xl tracking-wider">benefits</p>
                    </div>

                    <div className="flex items-center space-x-3 cursor-pointer">
                        <span className="text-lg lg:text-xl tracking-wider">learn more</span>
                        <FaChevronRight
                            size={18} />
                    </div>

                    <div className="flex items-center flex-col lg:flex-row lg:space-x-3 justify-between space-y-5 lg:space-y-0 lg:pb-20">
                        <div className="bg-white p-3 flex space-x-3 rounded-xl
                        items-center w-full justify-center lg:justify-start lg:w-1/2">
                            <IoLogoGooglePlaystore
                                size={32}
                                className="text-purple-700" />
                            <div className="cursor-pointer">
                                <p className="text-sm text-purple-700 font-bold">GET IT ON</p>
                                <p className="text-purple-700 font-bold text-xl">Google Play</p>
                            </div>
                        </div>
                        <div className="bg-white p-3 flex space-x-3 rounded-xl
                        items-center w-full justify-center lg:justify-start lg:w-1/2">
                            <FaApple
                                size={32}
                                className="text-purple-700" />
                            <div className="cursor-pointer">
                                <p className="text-sm text-purple-700 font-bold">Download on the</p>
                                <p className="text-purple-700 font-bold text-xl">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/product/phone.png" />
                </div>
                <Link href="/products/rigour_app">
                    <div className="justify-self-end self-end cursor-pointer">
                        <FaChevronCircleRight
                            size={60} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductDescriptionSection;