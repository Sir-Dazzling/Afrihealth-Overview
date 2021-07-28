import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const PolarisSection = () => {
    return (
        <div className="bg-white flex flex-col space-y-0 lg:space-y-0 justify-between px-3 md:px-10 lg:px-12 py-5 lg:py-10 my-5 lg:my-10 text-black lg:mx-10 rounded-xl font-visblyround">
            <p className="font-bold text-3xl lg:text-4xl tracking-wider">Polaris
                <span className="font-normal">web</span></p>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center
            space-y-5 lg:space-y-0">
                <div className="space-y-5 lg:w-2/3 mt-10">
                    <div>
                        {/* <p className="font-bold text-lg lg:text-4xl tracking-wider">our service provider</p>
                        <p className="font-bold text-lg lg:text-4xl tracking-wider">
                            platform enables
                        </p> */}
                        <p className="font-bold text-lg lg:text-4xl tracking-wider">
                            Through our Polaris platform, medical practitioners interested in shaping the future of primary care are blended into the Afrihealth ecosystem as part of our physicians responsible for dispensing patient care both virtually and in person.
                        </p>
                    </div>

                    <div className='space-y-3'>
                        <p className="text-lg lg:text-xl tracking-wider">
                            With Afrihealth, your practice is simplified as we have integrated everything you need to deliver telecare at your best including Telemedicine, Electronic Medical Records, automated billing.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider">
                            Afrihealth multiplies your comfort by placing you in an environment that supports you so you focus less on administrative tasks and more on patient care. Within Polaris, you still reserve your autonomy to decide everything down to the last bits. From choosing your daily schedule to deciding your consultation fee, nothing is out of your reach. We have flexibility, support and convenience at the nucleus of our platform.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider">
                            Afrihealth allows you to increase your revenue drastically, expand your clientele by practising beyond borders, leaping over administrative impediments while supercharging your operational competence.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider">
                            We are hoping you signup because we believe you deserve to be part of the paradigm shift.
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