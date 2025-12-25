"use client";

import React from 'react';
import Link from 'next/link';
import { Trees, Wrench, Cable, Headset } from 'lucide-react';

const HomeNav = () => {
    const navItems = [
        {
            href: "/overview_iml",
            Icon: Trees,
            title: "Tree Inspection",
            description: "Tree and Wood Inspection equipment"
        },
        {
            href: "/overview_ga",
            Icon: Wrench,
            title: "Pneumatic Tools",
            description: "Pneumatic Tools such as guns, vacuums and gasket cutters"
        },
        {
            href: "/overviewfc",
            Icon: Cable,
            title: "Industrial Cables",
            description: "Industrial Cables and flexible Crane Cables"
        },
        {
            href: "/contact",
            Icon: Headset,
            title: "Contact Us",
            description: "Have any queries? Fill up a simple form to get in touch with us"
        }
    ];

    return (
        <div className="w-full mx-auto">
            <nav className="bg-[#b87333] py-4 w-full flex justify-center items-center">
                <ul className="list-none m-0 p-0 flex flex-wrap justify-around w-full">
                    {navItems.map((item, index) => (
                        <li key={index} className="w-full sm:w-1/4 p-2 text-center group">
                            <div className="h-full p-2 hover:bg-[#b87333] hover:text-white rounded-lg transition-colors duration-300">
                                <Link href={item.href} className="flex flex-col items-center text-white no-underline transition-transform duration-300 hover:scale-105 hover:text-[#f0e0bb]">
                                    <item.Icon 
                                        className="w-20 h-20 mb-2 transition-all duration-300" 
                                    />
                                    <h1 className="text-2xl my-2 font-bold">{item.title}</h1>
                                    <p className="text-base m-0 text-[#f0e0bb]">{item.description}</p>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HomeNav;
