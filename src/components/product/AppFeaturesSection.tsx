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
                        <p>
                            Demystifying health insurance for you and your family.
                        </p>
                    </div>
                    <div className="text-black text-lg lg:text-2xl font-medium space-y-3">
                        <p>
                            Rigour+ provides the opportunity to purchase health insurance while making sure our plans do not break the bank. We help you and your family save money on doctor&apos;s visits, prescriptions drugs, emergency response and other healthcare services.
                        </p>
                        <p>
                            Through strategic partnerships with HMOs & Hospitals, you can purchase different policies including dental and vision. Whether you seek coverage for your baby or your aged parents with chronic conditions, you can now choose the best plans at the most affordable prices.
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
                        <p>
                            Search more than 1000 medical service providers to find the best facility near you.
                        </p>
                    </div>
                    <div className="text-black text-lg lg:text-2xl font-medium space-y-3">
                        <p>
                            Rigour+ provides an interactive map of medical service providers by speciality and location.
                        </p>
                        <p>
                            More than just a search engine for health care services, you get detailed information about the medical service provider of your choice.
                        </p>
                        <p>
                            From blood banks and Pharmacies to Diagnostic centres, you get to choose between multiple options of well-vetted professional care centres.
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
                        <p>
                            Pay for anyone’s medical bills securely without being around them.
                        </p>
                    </div>
                    <div className="text-black text-lg lg:text-2xl font-medium space-y-3">
                        <p>
                            funding which covers Medicine purchases, transportation, medical services and other health services.
                        </p>
                        <p>
                            Through the Rigour+ app, you can fund a wallet that covers multiple accounts.
                        </p>
                        <p>
                            We believe cost should never be a hindrance to healthcare. With our pay for me option, you can access emergency medical funding that covers your entire treatment.
                        </p>
                        <p>
                            You can also generate a unique link for crowdfunding purposes that enables people to donate directly to your medical cause easily and safely while eliminating the fear of medical charity scams.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppFeaturesSection;