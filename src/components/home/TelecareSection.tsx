import React from "react";
import { breakPoints, sampleHealthData } from '../../../utils/sample-data';
import HealthCarousel from "./health/HealthCarousel";

const Telecare = () => {
    return (
        <div className="bg-gray-100 py-16 px-2 md:px-10 lg:px-12 lg:space-x-20 
        font-custom">
            <div className="text-center space-y-10 lg:space-y-20">
                <div>
                    <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                        all the features you need
                    </p>
                    <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                        to deliver<span className="text-blue-600"> telecare</span>
                    </p>
                </div>
                <HealthCarousel
                    data={sampleHealthData}
                    breakPoints={breakPoints} />
            </div>
        </div>
    );
};

export default Telecare;