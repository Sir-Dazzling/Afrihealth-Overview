import React from 'react';
import { FaChevronRight, FaPlusCircle, FaCheck } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';

const BenefitsSection = () => {
    return (
        <Slide left>
            <div className="bg-gray-100 flex flex-col lg:flex-row justify-between 
        px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround">

                <div className="bg-green-light rounded-3xl py-3 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-32">
                    <div className="flex justify-between items-center text-black">
                        <div className="text-3xl font-bold">
                            <p>Benefits</p>
                        </div>
                        <FaPlusCircle
                            className="text-black"
                            size={48} />
                    </div>
                    <div className="space-y-5 lg:space-y-10">
                        <div className="text-xl lg:text-5xl font-bold 
                    tracking-wider text-black space-y-1">
                            <p>don&apos;t just take our</p>
                            <p>word for it. we</p>
                            <p>are changing the idealogy of healthcare</p>
                        </div>
                        <div className="text-black text-lg lg:text-3xl font-medium">
                            <p>our response ambulance service</p>
                            <p>is just a click away</p>
                        </div>
                        <div className="flex items-center space-x-3 cursor-pointer lg:pb-10">
                            <span className="text-blue-normal text-lg lg:text-xl tracking-wider">learn more</span>
                            <FaChevronRight
                                className="text-blue-normal"
                                size={18} />
                        </div>
                    </div>
                </div>
                <div className="bg-white lg:w-2/3 py-3 px-5 lg:px-10 rounded-3xl space-y-10">

                    <div className="flex justify-between items-center">
                        <p className="text-3xl font-bold">
                            Why us?
                        </p>
                        <FaPlusCircle
                            className="text-black"
                            size={48} />
                    </div>
                    <div className="space-y-10">
                        <div className="flex items-center space-x-3">
                            <FaCheck
                                size={42}
                                className="bg-gray-400 p-3 rounded-full" />
                            <p className="text-lg lg:text-xl tracking-wider w-3/4">
                                We focus on reducing health care spending, so we give the best at the ost affordable price
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaCheck
                                size={42}
                                className="bg-gray-400 p-3 rounded-full" />
                            <p className="text-lg lg:text-xl tracking-wider w-3/4">
                                We focus on reducing health care spending, so we give the best at the ost affordable price
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaCheck
                                size={42}
                                className="bg-gray-400 p-3 rounded-full" />
                            <p className="text-lg lg:text-xl tracking-wider w-3/4">
                                We focus on reducing health care spending, so we give the best at the ost affordable price
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaCheck
                                size={42}
                                className="bg-gray-400 p-3 rounded-full" />
                            <p className="text-lg lg:text-xl tracking-wider w-3/4">
                                We focus on reducing health care spending, so we give the best at the ost affordable price
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="h-48"
                            src="/images/product/laptop.png" />
                    </div>

                </div>
            </div>
        </Slide>
    );
};

export default BenefitsSection;