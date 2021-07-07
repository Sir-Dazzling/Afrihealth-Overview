import React from "react";
import { FaPlusCircle } from 'react-icons/fa';

const AppSection = () => {
    return (
        <div className="bg-gray-100 flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-32 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-custom">
            <div className="bg-purple-normal rounded-3xl py-3 px-5 lg:px-10 lg:w-1/3
            space-y-10 lg:space-y-32">
                <div className="flex justify-between items-center text-white">
                    <div className="text-xl font-bold">
                        <p>Rapid Emergency</p>
                        <p>Response</p>
                    </div>
                    <FaPlusCircle
                        className="text-white"
                        size={48} />
                </div>
                <div className="space-y-5 lg:space-y-10">
                    <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider text-white space-y-1">
                        <p>you don&apos;t have to</p>
                        <p>lose a loved one</p>
                        <p>carelessly</p>
                    </div>
                    <div className="text-white text-lg lg:text-2xl font-medium">
                        <p>our response ambulance service</p>
                        <p>is just a click away</p>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row lg:space-x-3 justify-between space-y-5 lg:space-y-0 lg:pb-20">
                        <div className="bg-white p-3 flex space-x-3 rounded-xl
                        items-center w-full justify-center lg:justify-start lg:w-1/2">
                            <img src="/images/product/playstore.png" />
                        </div>
                        <div className="bg-white p-3 flex space-x-3 rounded-xl
                        items-center w-full justify-center lg:justify-start lg:w-1/2">
                            <img src="/images/product/apple.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg lg:w-2/3 flex flex-col lg:flex-row">
                <div className="rounded-3xl py-8 px-5 lg:px-10 space-y-10">
                    <div className="space-y-3">
                        <p className="text-xl font-bold">Rigour App</p>
                        <p className="text-lg lg:text-xl tracking-wider">
                            never loose a loved one to slow emergency response!
                        </p>
                    </div>

                    <div>
                        <p className="text-lg lg:text-xl tracking-wider">
                            get help when you need it. positive outcomes in some situations
                            is a matter
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider">
                            of response time with our rigour+ app you can get emergency
                            services almost instantly
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 py-16 px-10">
                    <img
                        src="/images/app/rigour_plus.png" />
                </div>
            </div>
        </div>
    );
};

export default AppSection;