import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const BannerSection = () => {
    return (
        <div className="bg-gray-normal flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-32 lg:py-10">
            <div className="flex lg:py-20 flex-col justify-between space-y-5 xl:space-y-32 lg:w-2/3">
                <div className="space-y-1 lg:space-y-10 py-10 lg:py-0">
                    <div className="flex flex-col lg:space-y-5">
                        <p className="font-bold text-lg lg:text-3xl">our product</p>
                        <div>
                            <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                with years of proper
                            </p>
                            <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                research,
                            </p>
                        </div>
                        <p className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                            afrihealth has curated and designed
                            a range of products and services, partenring with certified healthcare
                            providers, health maintenance organisations, pharmacies, laboratories and
                            other essentail health services to make solutons accessible to africans and the world at large
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
            <div className="w-full sm:w-1/3 lg:w-1/3">
                <img
                    className=""
                    src="/images/product/1.png" />
            </div>
        </div>
    );
};

export default BannerSection;