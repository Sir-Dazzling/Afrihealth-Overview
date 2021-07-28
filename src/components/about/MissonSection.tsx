import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Slide from 'react-reveal/Slide';

const MissonSection = () => {
    return (
        <Slide right>
            <div className="bg-gray-100 flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround">

                <div className="bg-green-normal rounded-3xl py-10 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-20">
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
                            <p>
                                To become your healthcare solutions provider that gives you complete control over your health and your loved one’s health in a personalized, transparent and empathetic manner.
                            </p>
                        </div>
                        <div className="text-white text-lg tracking-wider lg:text-2xl font-medium">
                            <p>in africa and ultimately worldwide</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg lg:w-2/3 flex flex-col lg:flex-row">
                    <div className="rounded-3xl py-10 px-5 lg:px-10 space-y-10">
                        <div className="space-y-10">
                            <p className="text-xl font-bold">Our Mission</p>
                            <img
                                className="rounded-full h-32"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
                            <div className="text-xl lg:text-4xl 
                    tracking-wider">
                                <p>
                                    Afrihealth is on a mission to create <span className="font-bold">the most advanced, affordable and complete virtual care </span> model for you through cutting-edge technology & universal access to medical resources
                                </p>
                            </div>
                            <p className="text-lg tracking-wider lg:text-2xl font-medium">
                                By providing healthcare solutions for you at your convenience & through the passion and commitment of our team, we can be a significant agent in greatly raising healthcare access and standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default MissonSection;