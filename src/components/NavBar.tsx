import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { menuItems, topBarItems } from '../data/dummy';

const NavBar = () => {
    return (
        <header className="">
            {/* Top Bar */}
            <div className="flex border-t-[6px] border-yellow-400 px-40">
                <Link href={"/"} className="-mt-1.5 px-1 bg-white">
                    <Image
                        src="https://www.nke.at/templates/yootheme/cache/69/logo_neu-699b02e3.webp"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <ul className="ml-auto mr-16 mt-6 flex gap-x-12">
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
            <nav className="pt-5 ml-40">
                <ul className="flex items-center gap-x-8">
                    {menuItems.map((item, index) => (
                        <li className="inline-block relative" key={index}>
                            <Link
                                href="/"
                                className="flex justify-center items-center min-h-[40px] text-base font-medium hover-border"
                            >
                                <span className="inline-flex">{item.icon}</span>
                                <span className="inline-flex hover:text-blue-800">{item.name === "Home" ? "" : item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;