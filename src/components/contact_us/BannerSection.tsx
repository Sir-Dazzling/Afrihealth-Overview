import React from 'react';
import { IoIosHelpCircleOutline, IoMdHeartEmpty } from 'react-icons/io';

const BannerSection = () => {
    return (
        <div className="bg-green-100 flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-32 lg:py-10">
            <div className="flex lg:py-20 flex-col justify-between space-y-5 xl:space-y-32 lg:w-2/3">
                <div className="space-y-1 lg:space-y-10 py-10 lg:py-0">
                    <div className="flex flex-col lg:space-y-5">
                        <p className="font-bold text-lg lg:text-3xl">contact us</p>
                        <div>
                            <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                we can't wait to hear
                            </p>
                            <p className="text-2xl lg:text-7xl font-bold tracking-wider">
                                from you!
                            </p>
                        </div>
                        <p className="text-lg lg:text-2xl tracking-wider lg:w-2/3">
                            this is the place to start. find the answers you need from the afrihealth community or our award-winning support team
                        </p>
                    </div>
                    <div className="flex space-x-5">
                        <div className="bg-white w-1/5 text-xl lg:text-xl tracking-wider
                        p-3 rounded-xl">
                            <IoIosHelpCircleOutline
                                size={48} />
                            <p>Help</p>
                            <p>Center</p>
                        </div>
                        <div className="bg-white w-1/5 p-3 text-xl lg:text-xl 
                        tracking-wider rounded-xl">
                            <IoMdHeartEmpty
                                size={48} />
                            <p>Customer</p>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/3 lg:w-1/3">
                <img
                    className=""
                    src="/images/contact_us/1.png" />
            </div>
        </div>
    );
};

export default BannerSection;