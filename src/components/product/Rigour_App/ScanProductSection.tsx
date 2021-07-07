import React from 'react';

const ScanProductSection = () => {
    return (
        <div className="bg-blue-normal flex flex-col-reverse lg:flex-row lg:justify-between 
        px-5 md:px-10 mx-3 lg:mx-32 lg:px-16 lg:pt-16 lg:space-x-20 space-y-10 lg:space-y-0 font-custom rounded-3xl">
            <div className="lg:space-y-20 lg:w-2/3">
                <p className="text-white text-2xl lg:text-3xl mb-10 lg:mb-0">Scan Product</p>
                <div className="space-y-10">
                    <p className="text-white text-2xl lg:text-3xl">Rigour Plus</p>
                    <div className="text-2xl lg:text-5xl text-white font-bold tracking-wider">
                        <p>through our robust barcode</p>
                        <p>scanning tech, users can</p>
                        <p>verify</p>
                    </div>
                    <div className="text-lg lg:text-2xl font-medium text-white">
                        <p>the authencity of the drugs purchased by</p>
                        <p>scanning the product barcode through rigour + app</p>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row lg:space-x-3 space-y-5 lg:space-y-0 pb-10 lg:pb-0">
                        <img className="cursor-pointer" src="/images/product/playstore2.png" />
                        <img className="cursor-pointer" src="/images/product/apple2.png" />
                    </div>
                </div>

            </div>
            <div className="flex items-start lg:pr-3 pb-10 lg:pb-0">
                <img
                    src="/images/product/phone3.png" />
                <img
                    className="hidden lg:block"
                    src="/images/product/plus2.png" />
            </div>
        </div>
    );
};

export default ScanProductSection;