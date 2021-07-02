import React from "react";

const TestimonialSection = () => {
    return (
        <div className="bg-gray-100 flex flex-col sm:flex-row justify-between 
        px-2 md:px-10 lg:px-32 py-16 sm:space-x-20 space-y-10 sm:space-y-0">
            <div className="bg-green-100 rounded-3xl px-2 md:px-10 py-16 space-y-16">
                <p className="text-xl lg:text-4xl tracking-wider">
                    We are intrigued by the transformation potential of such an application
                    and are aware of the sucesses and future potential of Blockchain systems.
                    We are quite open to what will improve our buisess processes that will
                    synergise a win-win situaton for all concerned parties
                </p>
                <div>
                    <div className="flex items-center space-x-5">
                        <img
                            className="rounded-full h-16"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
                        <div className="text-1xl lg:text-2xl">
                            <p><span className="font-bold">Sophie</span> Lanister</p>
                            <p className="font-bold">CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;