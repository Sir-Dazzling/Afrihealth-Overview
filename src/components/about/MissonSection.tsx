import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Slide from 'react-reveal/Slide';

const MissonSection = () => {
    return (
        <div className="bg-gray-100 flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-custom">
            <Slide left>
                <div className="bg-green-normal rounded-3xl py-10 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-32">
                    <div className="flex justify-between items-center text-white">
                        <div className="text-xl lg:text-2xl font-bold">
                            <p>Our Vision</p>
                        </div>
                        <FaPlusCircle
                            className="text-white"
                            size={48} />
                    </div>
                    <div className="space-y-5 lg:space-y-10">
                        <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider text-white space-y-1">
                            <p>to provide access</p>
                            <p>to quality health</p>
                            <p>care to everyone</p>
                        </div>
                        <div className="text-white text-lg tracking-wider lg:text-2xl font-medium">
                            <p>in africa and ultimately worldwide</p>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide right>
                <div className="bg-white rounded-lg lg:w-2/3 flex flex-col lg:flex-row">
                    <div className="rounded-3xl py-10 px-5 lg:px-10 space-y-10">
                        <div className="space-y-10">
                            <p className="text-xl font-bold">Our Mission</p>
                            <img
                                className="rounded-full h-32"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
                            <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider">
                                <p>
                                    it is our vision to extend the
                                </p>
                                <p>
                                    benefits of revolutionary
                                </p>
                                <p>technology</p>
                            </div>
                            <p className="text-lg tracking-wider lg:text-2xl font-medium">
                                automation and the internet of things to areas with scarce
                                remedial and health amenities. this is all to ensure that everyone
                                has equal access to healthcare and emergency medical facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default MissonSection;