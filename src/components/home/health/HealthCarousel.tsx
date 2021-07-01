import React from "react";
import Carousel from "react-elastic-carousel";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { HealthCarouselProps, TelecareItemTypes } from "../../../interfaces";
import HealthItem from "./HealthItem";

const CustomArrow = ({ type, onClick, isEdge }) => {
    const arrow = type === "PREV" ? <FaChevronCircleLeft
        color="#00AF54" size={48} /> : <FaChevronCircleRight
        color="#00AF54" size={48} />

    return (
        <button className="focus:outline-none" onClick={onClick} disabled={isEdge}>
            {arrow}
        </button>
    )
};

const HealthCarousel = ({
    data,
    breakPoints
}: HealthCarouselProps) => {
    return (
        <div className="z-10">
            <Carousel
                showArrows={false}
                enableAutoPlay={true}
                renderArrow={CustomArrow}
                className={`carousel-component`}
                pagination={false}
                isRTL={false}
                breakPoints={breakPoints}>
                {data.map((item: TelecareItemTypes) =>
                    <HealthItem
                        key={item.id}
                        desc={item.desc}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        link={item.link}
                        type={item.type} />
                )}
            </Carousel>
        </div>
    );
};

export default HealthCarousel;