import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const PiconSection = () => {
    return (
        <div className="bg-black fflex flex-col space-y-0 lg:space-y-0 justify-between px-3 md:px-10 lg:px-12 py-5 lg:py-10 my-5 lg:my-10 text-white lg:mx-10 rounded-xl font-visblyround">
            <p className="font-bold text-xl lg:text-4xl tracking-wider">Picon
                <sup>TM</sup></p>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center
            space-y-5 lg:space-y-0">
                <div className="space-y-5 lg:w-2/3 mt-10">
                    {/* <p className="font-bold text-xl lg:text-4xl tracking-wider">our service provider</p>
                    <p className="font-bold text-xl lg:text-4xl tracking-wider">
                        platform enables
                    </p> */}
                    <p className="font-bold text-xl lg:text-4xl tracking-wider">
                        We believe in re-enforcing your trust in the manufacturing & distribution of drugs through technology-enabled transparency. In collaboration with the National Agency for Food and Drug Administration and Control (NAFDAC), we have developed a software solution to guarantee product integrity in value chain standards. PICON is a cloud-based holistic track and trace system that aims to eliminate the spread of counterfeit drugs.
                    </p>
                    <div className='space-y-3'>
                        <p className="text-lg lg:text-xl tracking-wider">
                            PICON generates, stores, and aggregates serialization data for uniquely identifying every product at all levels of the value chain. Our software also generates unique scannable GS1 barcodes & QR codes that ensure complete verifiability by the customers. Through partnerships with major stakeholders in the Pharmaceutical production industry, we enable compliance with regional and international standards right from the production line to the retailing of drugs.
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

export default PiconSection;