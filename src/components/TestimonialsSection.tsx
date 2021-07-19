import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const TestimonialSection = () => {
    return (
        <Fade bottom>
            <div className="bg-gray-100 flex flex-col sm:flex-row justify-between 
        px-2 md:px-10 lg:px-10 py-16 sm:space-x-20 space-y-10 sm:space-y-0 font-visblyround">
                <div className="bg-green-lighter rounded-3xl px-2 md:px-10 py-16 space-y-16">
                    <p className="text-xl lg:text-4xl tracking-wider">
                        We are intrigued by the transformation potential of such an application
                        and are aware of the sucesses and future potential of Blockchain systems.
                        We are quite open to what will improve our buinsess processes that will
                        synergise a win-win situaton for all concerned parties
                    </p>
                    <div className="flex flex-col lg:flex-row lg:justify-between
                lg:items-center">
                        <div className="flex items-center space-x-5">
                            <img
                                className="rounded-full h-16"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
                            <div className="text-1xl lg:text-2xl">
                                <p><span className="font-bold">Sophie</span> Lanister</p>
                                <p className="font-bold">CEO</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 pb-5 sm:pb-10 lg:pb-0
            px-2 md:px-10 pt-3 md:pt-0">
                            <div className="flex items-center space-x-3 font-medium text-lg 
                    font-visblyround">
                                <span className="font-bold text-xl lg:text-3xl">01</span>
                                <span className="text-gray-500 text-xl lg:text-3xl">/ 02</span>
                            </div>

                            <div className="flex space-x-3 items-center">
                                <FaChevronLeft
                                    // onClick={() => {
                                    //     carouselRef.current.goBack()
                                    // }}
                                    className="bg-gray-300 p-2 rounded-full cursor-pointer"
                                    size={36} />
                                <FaChevronRight
                                    // onClick={() => {
                                    //     carouselRef.current.goNext()
                                    // }}
                                    className="bg-gray-300 p-2 rounded-full cursor-pointer"
                                    size={36} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default TestimonialSection;