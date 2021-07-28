import React from 'react';
import Slide from 'react-reveal/Slide';

const BannerSection = () => {
    return (
        <div className="bg-gray-other flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row justify-between px-2 md:px-10 lg:px-10 lg:py-10 font-visblyround">
            <div className="flex lg:py-20 flex-col justify-between space-y-5 xl:space-y-32 lg:w-2/3">
                <div className="space-y-1 lg:space-y-10 py-10 lg:py-0">
                    <Slide left cascade>
                        <div className="lg:space-y-5">
                            <div className="flex flex-col lg:space-y-5">
                                <p className="font-bold text-lg lg:text-3xl">about us</p>
                                <div>
                                    <p className="text-2xl lg:text-7xl font-bold tracking-wider"><del>improving</del> Reimagining healthcare completely</p>
                                </div>
                            </div>
                            <div className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                                Afrihealth is on a mission to positively change healthcare from the ground up by connecting the best of technology and people so that health is a multiplier and no longer an additional mental burden daily
                            </div>
                            <div className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                                We are shattering glass ceilings by redesigning the healthcare space through a direct harmony between the doctor and the patient.
                            </div>
                            <div className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                                We believe that universal access to healthcare is only possible through the synergy between the best of science and humanities.
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="w-full relative sm:w-1/3 lg:w-1/5">
                <img
                    className=""
                    src="/images/about/1.png" />
                <img
                    className="hidden absolute lg:block bottom-30 lg:bottom-32 -left-40"
                    src="/images/about/2.png" />
            </div>
        </div>
    );
};

export default BannerSection;