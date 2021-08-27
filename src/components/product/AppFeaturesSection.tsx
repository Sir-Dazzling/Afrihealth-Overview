import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const AppFeaturesSection = () => {
    return (
        <div className="flex flex-col lg:flex-row px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround">
            <div className="bg-green-light rounded-3xl py-3 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-32 lg:pb-32">
                <div className="flex justify-between items-center text-black">
                    <div className="text-3xl font-bold">
                        <p>Purchase Health Insurance </p>
                    </div>
                    <FaPlusCircle
                        className="text-black"
                        size={48} />
                </div>
                <div className="space-y-5 lg:space-y-10">
                    <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider text-black space-y-1">
                        <p>Rigour+ partners</p>
                        <p>with a wide range</p>
                        <p>of HMOs to give</p>
                        <p>our user a </p>
                        <p>cataglogue</p>
                    </div>
                    <div className="text-black text-lg lg:text-2xl font-medium">
                        <p>
                            of services and the liberty to make those choices. Users can browse varying products and policies of different HMOs, and also purchase insurance
                            Policies on the Rigour+ app
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-light rounded-3xl py-3 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-32">
                <div className="flex justify-between items-center text-black">
                    <div className="text-3xl font-bold">
                        <p>Check nearby Medical Facilities</p>
                    </div>
                    <FaPlusCircle
                        className="text-black"
                        size={48} />
                </div>
                <div className="space-y-5 lg:space-y-10">
                    <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider text-black space-y-1">
                        <p>when certain</p>
                        <p>medical needs</p>
                        <p>arise, making</p>
                        <p>uniformed</p>
                        <p>searches</p>
                    </div>
                    <div className="text-black text-lg lg:text-2xl font-medium">
                        <p>
                            or being unaware where to purchase Certain products or services can be frustrating.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-purple-light rounded-3xl py-3 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-32">
                <div className="flex justify-between items-center text-black">
                    <div className="text-3xl font-bold">
                        <p>Pay 4 Me</p>
                    </div>
                    <FaPlusCircle
                        className="text-black"
                        size={48} />
                </div>
                <div className="space-y-5 lg:space-y-10">
                    <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider text-black space-y-1">
                        <p>with our pay for</p>
                        <p>me option, our</p>
                        <p>users can have</p>
                        <p>access to</p>
                        <p>healthcare</p>
                    </div>
                    <div className="text-black text-lg lg:text-2xl font-medium">
                        <p>
                            funding which covers Medicine purchases, transportation, medical services and other health services.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppFeaturesSection;