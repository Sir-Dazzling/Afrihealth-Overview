import React from "react";
import { FaPlusCircle } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';

const AppSection = () => {
    return (
        <div className="bg-gray-100 flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround">
            <Slide left>
                <div className="bg-purple-normal rounded-3xl py-5 px-5 lg:px-5 lg:w-1/3
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
                        <div className="text-xl lg:text-5xl font-bold 
                    tracking-wider text-white space-y-1">
                            <p>you don&apos;t have to</p>
                            <p>lose a loved one</p>
                            <p>carelessly</p>
                        </div>
                        <div className="text-white text-lg lg:text-3xl font-medium">
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
            </Slide>

            <Slide right>
                <div className="bg-white rounded-lg lg:w-2/3 flex flex-col lg:flex-row py-5">
                    <div className="rounded-3xl py-8 px-5 lg:px-10 space-y-10 items-center">
                        <div className="space-y-3">
                            <p className="text-lg lg:text-3xl font-bold">Rigour App</p>
                            <p className="text-lg lg:text-3xl tracking-wider">
                                never loose a loved one to slow emergency response!
                            </p>
                        </div>

                        <div>
                            <p className="text-lg lg:text-3xl tracking-wider">
                                get help when you need it. positive outcomes in some situations
                                is a matter
                            </p>
                            <p className="text-lg lg:text-3xl tracking-wider">
                                of response time with our rigour+ app you can get emergency
                                services almost instantly
                            </p>
                        </div>
                    </div>
                    <img
                        height={717}
                        width={536}
                        className="mx-auto lg:pt-32"
                        src="/images/app/rigour_plus.png" />
                </div>
            </Slide>

        </div>
    );
};

export default AppSection;