import React from "react";
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-gray-heavy space-y-0 lg:space-y-10 
        sm:flex-row items-center justify-between px-2 md:px-10 lg:px-32 lg:py-10">
            <Link href="/product">
                <img className="cursor-pointer" src="/images/product/left.png" />
            </Link>
            <p className="text-4xl lg:text-7xl tracking-wider font-bold">
                rigour app overview
            </p>
        </div>
    );
};

export default Header;