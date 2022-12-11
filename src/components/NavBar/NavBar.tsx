import type { NextComponentType } from "next";
import Image from 'next/image';

import Link from 'next/link';
import { useState } from 'react';
import { menuItems, topBarItems } from '../../data/dummy';
import DesktopMenu from "./DesktopMenu";

const NavBar: NextComponentType = () => {

    // onscroll down navbar will be fixed
    const [scroll, setScroll] = useState(false);


    return (
        <header className="relative">
            {/* Top Bar */}
            <div className="flex border-t-[6px] border-yellow-400 lg:px-40 ">
                <Link href={"/"} className="-mt-1.5 px-1 bg-white">
                    <Image
                        src="https://www.nke.at/templates/yootheme/cache/69/logo_neu-699b02e3.webp"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <ul className="ml-auto mt-6 flex space-x-12">
                    {topBarItems.map((item, index) => (
                        <Link
                            key={index}
                            href={"/"}
                            className="flex justify-center items-center"
                        >
                            {item.icon}
                            <span className="inline-flex ml-1.5">{item.name}</span>
                        </Link>
                    ))}
                </ul>
            </div>
            {/* @ts-ignore */}
            <DesktopMenu menuItems={menuItems} />
        </header>
    );
};

export default NavBar;