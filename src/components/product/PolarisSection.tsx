import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const PolarisSection = () => {
    return (
        <div className="bg-white flex flex-col space-y-0 lg:space-y-0 justify-between px-3 md:px-10 lg:px-12 py-5 lg:py-10 my-5 lg:my-10 text-black lg:mx-10 rounded-xl font-visblyround">
            <p className="font-bold text-3xl lg:text-4xl tracking-wider">Polaris
                <span className="font-normal">web</span></p>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center
            space-y-5 lg:space-y-0">
                <div className="space-y-5 lg:w-2/3">
                    <div>
                        <p className="font-bold text-lg lg:text-4xl tracking-wider">our service provider</p>
                        <p className="font-bold text-lg lg:text-4xl tracking-wider">
                            platform enables
                        </p>
                    </div>

                    <div className='space-y-3'>
                        <p className="text-lg lg:text-xl tracking-wider">
                            doctors, pharmacist and a range of other health management
                            professionals to register for user consultation. this also
                            covers telemedicine enquires and other relevant services.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 cursor-pointer">
                        <span className="text-lg lg:text-xl tracking-wider">request a demo</span>
                        <FaChevronRight
                            size={18} />
                    </div>
                </div>
                <div className="lg:w-3/4">
                    <img
                        src="/images/product/laptop.png" />
                </div>

            </div>
        </div>
    );
};

export default PolarisSection;