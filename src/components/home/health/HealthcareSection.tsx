import React from "react";
import { FaChevronRight } from 'react-icons/fa';

const Healthcare = () => {
    return (
        <div className="bg-white relative flex flex-col lg:flex-row justify-between 
        px-2 md:px-10 lg:px-12 py-16 lg:space-x-20 space-y-10 lg:space-y-0 items-center font-visblyround">
            <img
                className="h-40 lg:h-80 animate-spin-slow"
                src="/images/earth.png"
                alt="globe" />
            <div className="space-y-5 lg:space-y-10">
                <div>
                    <p className="text-2xl lg:text-6xl font-bold tracking-wider">
                        Empathetic and convenient <span className="text-green-500">healthcare</span>
                    </p>
                    <p className="text-2xl lg:text-6xl font-bold tracking-wider">
                        for you and your loved ones.
                    </p>
                </div>
                <p className="lg:w-full text-lg lg:text-3xl tracking-wider">
                    At Afrihealth we aim to increase the quality of life regardless of location or socially determined barriers. While delivering better results, we ensure cost is never a basis to be denied premium healthcare.
                </p>
                <div className="flex items-center space-x-3 cursor-pointer">
                    <span className="text-blue-600 text-lg lg:text-xl tracking-wider">learn more</span>
                    <FaChevronRight
                        className="text-blue-600"
                        size={18} />
                </div>
            </div>
        </div>
    );
};

export default Healthcare;