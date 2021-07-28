import React from 'react';

const ScanProductSection = () => {
    return (
        <div className="relative bg-blue-normal flex flex-col-reverse lg:flex-row lg:justify-between 
        px-5 md:px-10 mx-3 lg:mx-10 lg:px-16 lg:pt-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround rounded-3xl pb-10">
            <div className="lg:space-y-20 lg:pb-10 lg:w-2/3">
                <p className="text-white text-2xl lg:text-3xl mb-10 lg:mb-0">Scan Product</p>
                <div className="space-y-10">
                    <p className="text-white text-2xl lg:text-3xl">Rigour Plus</p>
                    <div className="text-2xl lg:text-5xl text-white font-bold tracking-wider">
                        <p>
                            Authenticity has never been simpler. Get access to transparent data from pharmaceutical scientists to you.
                        </p>
                    </div>
                    <div className="text-lg lg:text-2xl font-medium text-white">
                        <p>When you buy a drug, you can now be certain of its safety through the Scan feature on the Rigour+ app. </p>
                        <p>
                            You just scan the GS1 barcodes or QR codes and get the Batch Manufacturing Records (BMR), NAFDAC registration number, shelf life, and a highlighted supply chain history from the manufacturer to the point of sale, giving you global traceability.
                        </p>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row lg:space-x-3 space-y-5 lg:space-y-0 pb-10 lg:pb-0">
                        <img className="cursor-pointer" src="/images/product/playstore2.png" />
                        <img className="cursor-pointer" src="/images/product/apple2.png" />
                    </div>
                </div>

            </div>
            <div className="absolute -top-20 right-0 bottom-0 flex justify-between items-start lg:pr-3 pb-10 lg:pb-0">
                <div className="relative">
                    {/* <img
                        // className="animate-bounce"
                        src="/images/product/drug.png" /> */}
                    <img
                        src="/images/product/drug.png"
                        alt="drug" />
                    <div className="absolute bottom-0">
                        <div className="relative animate-slow-bounce">
                            <img
                                className=""
                                src="/images/product/cover3.png" />
                            <img
                                className="absolute bottom-32 left-36"
                                src="/images/product/scanner.png"
                                width={350} />
                        </div>

                    </div>
                </div>

                <img
                    className="hidden lg:block absolute right-0 top-28 right-4"
                    src="/images/product/plus2.png" />
            </div>
        </div>
    );
};

export default ScanProductSection;