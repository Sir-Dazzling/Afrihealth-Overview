import React from "react";
import PricingItem from "./PricingItem";

const PricingSection = () => {
    return (
        <div className="bg-gray-100 flex flex-col space-y-0 lg:space-y-32 
        items-center justify-between px-2 md:px-10 lg:px-32 lg:py-10">
            <div className="text-center w-full space-y-5">
                <p className="font-bold text-2xl lg:text-3xl tracking-wider">pricing</p>
                <div className="text-xl lg:text-6xl font-bold tracking-wider">
                    <p>Chose a helath plan that works</p>
                    <p>for you</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
                <PricingItem
                    desc="Best for new businesses or online businesses new to in-person selling"
                    price={29}
                    title="Standard afrihealth"
                    color="green-600" />
                <PricingItem
                    desc="Best for new businesses or online businesses new to in-person selling"
                    price={89}
                    title="Classic afrihealth"
                    color="yellow-500" />
                <PricingItem
                    desc="Best for new businesses or online businesses new to in-person selling"
                    price={290}
                    title="Premium afrihealth"
                    color="purple-600" />
            </div>
        </div>
    );
};

export default PricingSection;