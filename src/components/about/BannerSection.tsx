import React from 'react';

const BannerSection = () => {
    return (
        <div className="flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-32 lg:py-10">
            <div className="flex lg:py-20 flex-col justify-between space-y-5 xl:space-y-32 lg:w-2/3">
                <div className="space-y-1 lg:space-y-10">
                    <div className="flex flex-col lg:space-y-5">
                        <p className="font-bold text-xl lg:text-3xl">about us</p>
                        <div>
                            <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                                taking charge of the
                            </p>
                            <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                                health space one move
                            </p>
                            <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                                at a time.
                            </p>
                        </div>

                    </div>
                    <div className="text-xl lg:text-2xl tracking-wider lg:w-2/3">
                        in a bid to bridge the gap, we at afrihealth are creating an ecosystem
                        where healthcare service providers tailored specifically to your needs
                        can be found in rel time at the click of a button.
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/3 lg:w-1/3">
                <img
                    className=""
                    src="/images/about/1.png" />
            </div>
        </div>
    );
};

export default BannerSection;