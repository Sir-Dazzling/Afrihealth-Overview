import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

const BannerSection = () => {
    return (
        <div className="bg-gray-other flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row justify-between px-2 md:px-10 lg:px-10 lg:py-10 font-visblyround">
            <div className="flex lg:py-20 flex-col justify-between space-y-5 xl:space-y-32 lg:w-2/3">
                <div className="space-y-1 lg:space-y-10 py-10 lg:py-0">
                    <LightSpeed left cascade>
                        <div className="lg:space-y-5">
                            <div className="flex flex-col lg:space-y-5">
                                <p className="font-bold text-lg lg:text-3xl">about us</p>
                                <div>
                                    <p className="text-2xl lg:text-7xl font-bold tracking-wider">taking charge of the</p>
                                    <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                        health space one move
                                    </p>
                                    <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                        at a time.
                                    </p>
                                </div>
                            </div>
                            <div className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                                in a bid to bridge the gap, we at afrihealth are creating an ecosystem
                                where healthcare service providers tailored specifically to your needs
                                can be found in rel time at the click of a button.
                            </div>
                        </div>

                    </LightSpeed>

                </div>
            </div>
            <div className="w-full relative sm:w-1/3 lg:w-1/5">
                <img
                    className=""
                    src="/images/about/1.png" />
                <img
                    className="hidden absolute lg:block bottom-30 lg:bottom-10 -left-40"
                    src="/images/about/2.png" />
            </div>
        </div>
    );
};

export default BannerSection;