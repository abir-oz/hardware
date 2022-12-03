import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { menuItems, topBarItems } from '../data/dummy';

const NavBar = () => {

    // onscroll down navbar will be fixed
    const [scroll, setScroll] = useState(false);


    return (
        <header className="">
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
            <nav className="pt-5 max-w-3xl flex items-center">
                <ul className="flex items-center space-x-5">
                    {menuItems.map((item, index) => (
                        <li className="inline-block relative p-3" key={index}>
                            <Link
                                href="/"
                                className="flex justify-center items-center min-h-[40px] hover-border"
                            >
                                <span className="inline-flex text-xl">{item.icon}</span>
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