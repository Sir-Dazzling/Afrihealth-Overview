import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Slide from 'react-reveal/Slide';
import ReactCardFlip from "react-card-flip";

const MedicalAccessSection = () => {
    let [medCardFlipped, setMedCardFlipped] = useState(false);
    return (
        <div className="flex flex-col lg:flex-row bg-gray-100 lg:py-16 px-2 md:px-10 lg:px-10 lg:space-x-20 font-visblyround space-y-10 lg:space-y-0">
            <Slide left>
                <div className="bg-white pt-8 px-5 lg:px-10 lg:w-2/3 rounded-3xl">
                    <div className="space-y-5">
                        <p className="text-lg lg:text-3xl font-bold">Real Time Medical Access</p>
                        <p className="text-lg lg:text-3xl tracking-wider">
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
            </Slide>

            <Slide right>
                <div
                    onMouseEnter={() => {
                        setMedCardFlipped(!medCardFlipped);
                    }}
                    onMouseLeave={() => {
                        setMedCardFlipped(!medCardFlipped);
                    }}
                    // ${!medCardFlipped ? "bg-white" : "bg-black "}
                    className={`lg:w-1/3`}>
                    <ReactCardFlip
                        flipSpeedFrontToBack={1.5}
                        flipSpeedBackToFront={1.5}
                        isFlipped={medCardFlipped}
                        flipDirection="horizontal">
                        <div className="lg:w-full text-black
                        space-y-10 bg-white py-8 px-5 lg:px-10 rounded-3xl space-y-10">
                            <div className="flex justify-between items-center">
                                <div className="text-xl font-bold">
                                    <p>Pay 4 Me</p>
                                </div>
                                <div>
                                    <FaPlusCircle
                                        className="text-black"
                                        size={48} />
                                </div>

                            </div>
                            <img
                                className="h-28"
                                src="/images/medical_access/1.png" />
                            <div className="space-y-3 text-lg">
                                <div className="text-xl lg:text-5xl font-bold 
                    tracking-wider space-y-1">
                                    <p>access healthcare</p>
                                    <p>easily without</p>
                                    <p>funds!</p>
                                </div>
                                <p className=" text-lg lg:text-2xl">
                                    With our PAY for me feature on our mobile app your friends and relatives can help you pay for your medication
                                </p>
                            </div>
                        </div>
                        <div
                            className="lg:w-full text-white
                            space-y-10 bg-black py-8 px-5 lg:px-10 rounded-3xl space-y-10">
                            <div className="flex justify-between items-center text-white">
                                <div className="text-xl font-bold">
                                    <p>Drug Authentication</p>
                                </div>
                                <div>
                                    <FaPlusCircle
                                        className="text-white"
                                        size={48} />
                                </div>

                            </div>
                            <img
                                className="h-28"
                                src="/images/medical_access/1.png" />
                            <div className="space-y-3 text-lg">
                                <div className="text-xl lg:text-5xl font-bold 
                    tracking-wider text-white space-y-1">
                                    <p>verify and</p>
                                    <p>authenticate your</p>
                                    <p>drug purchases</p>
                                </div>
                                <p className="text-white text-lg lg:text-2xl">with our scan product feature.</p>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>

            </Slide>
        </div>
    );
};

export default MedicalAccessSection;