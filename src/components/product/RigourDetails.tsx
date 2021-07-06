import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const RigourDetails = () => {
    return (
        <div className="bg-gray-normal flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-32 py-16 lg:space-x-20 space-y-10 lg:space-y-0">
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
                        <p>packed with</p>
                        <p>special features in</p>
                        <p>mind</p>
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

            <div className="bg-white rounded-lg lg:w-2/3 flex flex-col">
                <div className="rounded-3xl py-8 px-5 lg:px-10 space-y-10">
                    <div className="flex w-full justify-between items-center">
                        <p className="text-xl font-bold">Purchase Notifications</p>
                        <div>
                            <img
                                src="/images/product/plus.png" />
                        </div>
                    </div>
                    <div>
                        <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                            With Rigour+ our clients are assigned to professional and certified pharmacists who offer verified services According to the clients budget and prescriptions. User can easily search for preferred medicines, consult
                            Pharmacist and purchase all by the click of a button
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <img
                            src="/images/product/phone.png" />
                    </div>
                    <div>
                        <img
                            src="/images/product/phone.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RigourDetails;