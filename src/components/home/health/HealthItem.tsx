import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { TelecareItemTypes } from "../../../interfaces";

const TelecareItem = ({
    imageUrl,
    desc,
    link,
    type
}: TelecareItemTypes) => {
    return (
        <div className="flex flex-col items-center lg:items-start space-y-5 lg:space-y-10">
            <img
                className="h-28"
                src={imageUrl} />
            <div className="text-lg text-left lg:text-xl tracking-wider w-2/3">
                <span className="font-bold mr-1">
                    {type === "ambulance" ? "ambulance service" : type === "telemedicine" ? "telemedicine " : "track and trace"}
                </span>
                <span>{desc}</span>
            </div>
            <Link href={link}>
                <div className="flex self-start items-center space-x-3 cursor-pointer">
                    <span className="text-blue-600 text-lg lg:text-xl tracking-wider">learn more</span>
                    <FaChevronRight
                        className="text-blue-600"
                        size={18} />
                </div>
            </Link>
        </div>
    );
};

export default TelecareItem;