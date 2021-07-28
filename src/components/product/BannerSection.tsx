import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';

const BannerSection = () => {
    return (
        <div className="bg-gray-normal flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-10 lg:py-10 font-visblyround">
            <Slide left cascade>
                <div className="flex lg:py-20 flex-col justify-between space-y-5 xl:space-y-32 lg:w-2/3">
                    <div className="space-y-1 lg:space-y-10 py-10 lg:py-0">
                        <div className="flex flex-col lg:space-y-5">
                            <p className="font-bold text-lg lg:text-3xl">our product</p>
                            <div>
                                <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                    Get thrust into the future of healthcare today.
                                </p>
                            </div>
                            <p className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                                Our unique approach to improving universal access to healthcare is reinforced by our expertise in leveraging our clinical and technological assets so they work in perfect sync for you
                            </p>
                            <div className="flex items-center space-x-3 cursor-pointer">
                                <span className="text-blue-normal text-lg lg:text-xl tracking-wider">scroll down</span>
                                <FaChevronRight
                                    className="text-blue-normal"
                                    size={18} />
                            </div>
                        </div>
                    </div>
                </div>

            </Slide>

            <div className="w-full sm:w-1/3 lg:w-1/3">
                <img
                    alt="product image"
                    src="/images/product/1.png" />
            </div>
        </div>
    );
};

export default BannerSection;