import React from "react";
import Link from 'next/link';
import Slide from 'react-reveal/Slide';

const Header = () => {
    return (
        <div className="bg-gray-heavy space-y-0 lg:space-y-10 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-10 lg:py-10
        font-visblyround">
            <Slide right cascade>
                <Link href="/product">
                    <img className="cursor-pointer" src="/images/product/left.png" />
                </Link>
                <p className="text-4xl lg:text-7xl tracking-wider font-bold">
                    rigour app overview
                </p>
            </Slide>

        </div>
    );
};

export default Header;