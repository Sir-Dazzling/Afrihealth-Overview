import React from "react";
import { PricingItemProps } from "../../interfaces";

const PricingItem = ({
    desc,
    price,
    title,
    color
}: PricingItemProps) => {
    return (
        <div className={`bg-${color} py-10 px-10 rounded-xl space-y-64 cursor-pointer`}>
            <div className="space-y-8">
                <p className={`${title !== "Classic afrihealth" ? "text-white" : 
                "text-black"} text-3xl lg:text-4xl font-bold tracking-wider`}>
                    {title}
                </p>
                <p className={`${title !== "Classic afrihealth" ? "text-white" 
                : "text-black"} w-full lg:w-2/3 text-lg lg:text-xl tracking-wider`}>
                    {desc}
                </p>
            </div>

            <div className="flex flex-col">
                <p className={`${title !== "Classic afrihealth" ? "text-white" : 
                "text-black"} lg:w-2/3 text-lg lg:text-4xl tracking-wider 
                flex items-end justify-end self-end font-extrabold`}>
                    <span className="text-lg lg:text-xl">&#163;</span>{price}/mo
                </p>
            </div>

        </div>
    );
};

export default PricingItem;