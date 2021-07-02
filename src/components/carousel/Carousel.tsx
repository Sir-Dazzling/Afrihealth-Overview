import React, { useRef, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
    "/images/carousel/carousel1.png",
    "/images/carousel/carousel3.png"
];

const CarouselSection = () => {
    let carouselRef = useRef(null);
    let [currentCarouselNo, setCurrentCarouselNo] = useState(1);
    return (
        <div className="flex flex-col-reverse space-y-0 lg:space-y-0 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-32 lg:py-10">
            <div className="flex pt-10 sm:pt-0 flex-col justify-between space-y-5 xl:space-y-32">
                <div className="space-y-1 lg:space-y-10">
                    <div className="flex flex-col">
                        <span className="text-3xl lg:text-7xl font-bold tracking-wider">in touch.</span>
                        <span className="text-3xl lg:text-7xl font-bold tracking-wider">in the moment.</span>
                    </div>
                    <div className="text-lg lg:text-xl tracking-wider">
                        with all the healthcare needs right within your reach
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <span className="text-blue-600 text-lg lg:text-xl tracking-wider">learn more</span>
                        <FaChevronRight
                            className="text-blue-600"
                            size={18} />
                    </div>
                </div>
                <div className="flex items-center space-x-3 pb-5 sm:pb-0 bg-gray-100">
                    <div className="flex items-center space-x-3 font-medium text-lg">
                        <span>0{currentCarouselNo}</span>
                        <span className="text-gray-500">/ 02</span>
                    </div>

                    <div className="flex space-x-3 items-center">
                        <FaChevronLeft
                            onClick={() => {
                                carouselRef.current.goBack()
                            }}
                            className="bg-gray-300 p-2 rounded-full cursor-pointer"
                            size={36} />
                        <FaChevronRight
                            onClick={() => {
                                carouselRef.current.goNext()
                            }}
                            className="bg-gray-300 p-2 rounded-full cursor-pointer"
                            size={36} />
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/3 lg:w-1/2">
                <div className="slide-container">
                    <Fade
                        onChange={(e) => {
                            setCurrentCarouselNo(e + 1);
                        }}
                        ref={carouselRef}
                        arrows={false}>
                        <div className="each-fade flex justify-center">
                            <img
                                className="h-96 2xl:h-carousel"
                                src={fadeImages[0]} />
                        </div>
                        <div className="each-fade flex justify-center">
                            <img
                                className="h-96 2xl:h-carousel"
                                src={fadeImages[1]} />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default CarouselSection;