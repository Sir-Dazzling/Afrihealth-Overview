import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const MedicalAccessSection = () => {
    return (
        <div className="flex flex-col lg:flex-row 
        bg-gray-100 py-16 px-2 md:px-10 lg:px-32 lg:space-x-20 font-custom">
            <div className="bg-white py-8 px-5 lg:px-10 lg:w-2/3 rounded-3xl">
                <div className="space-y-5">
                    <p className="text-xl font-bold">Real Time Medical Access</p>
                    <p className="text-lg lg:text-xl tracking-wider w-2/3">
                        we provide a low cost and high-quality care for everyone by connecting
                        medical experts to patients at the convenience of their homes/office
                    </p>
                </div>

                <div className="flex  justify-center">
                    <img
                        className="lg:h-96"
                        src="/images/medical_access/med_access.png" />
                </div>
            </div>
            <div className="lg:w-1/3 bg-black text-white py-8 px-5 lg:px-10 rounded-3xl
            space-y-10">
                <div className="flex justify-between items-center text-white">
                    <div className="text-xl font-bold">
                        <p>Drug Authentication</p>
                    </div>
                    <FaPlusCircle
                        className="text-white"
                        size={48} />
                </div>
                <img 
                className="h-28"
                src="/images/medical_access/1.png" />
                <div className="space-y-3 text-lg">
                    <div className="text-xl lg:text-4xl font-bold 
                    tracking-wider text-white space-y-1">
                        <p>Verify and</p>
                        <p>authenticate your</p>
                        <p>drug purchases</p>
                    </div>
                    <p className="text-white text-lg lg:text-2xl">with our scan product feature.</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalAccessSection;