import Link from "next/link";
import { useState } from "react";

// props definition for DesktopMenu


interface DesktopMenuProps {
    menuItems: {
        id: number;
        name: string;
        link: string;
        icon?: JSX.Element;
        submenu?: [];
    }[];
}

interface ItemProps {
    item: {
        id: number;
        name: string;
        link: string;
        icon?: JSX.Element;
        submenu?: [];
    };
}

interface SubMenuProps {
    submenu: {
        id: number;
        name: string;
        link: string;
        prefix: string
        submenu?: [];
    }[],
    classes: string;
}


const Item = ({ item }: ItemProps) => {
    const [show, setShow] = useState<Boolean>(false);

    return (
        <li className="inline-block relative p-3"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <Link
                href={item.link}
                className="flex justify-center items-center min-h-[40px] hover-border">
                {helper(item)}
            </Link>
            {
                show ? itemHelper(item) : null
            }
        </li>
    )
}

const SubMenu = ({ submenu, classes }: SubMenuProps) => (
    <div className={`${classes} absolute -left-10 shadow-lg rounded-lg z-20`}>
        <ul className="flex flex-col w-64 items-center space-y-2 p-3 shadow-xl">
            {
                submenu.map((item, index) => (
                    <SubItem key={index} item={item} />
                ))
            }
        </ul>
    </div>
)

const SubItem = ({ item }: ItemProps) => {
    const [show, setShow] = useState<Boolean>(false);

    return (
        <li className="relative bg-slate-50 rounded-md text-center w-full px-3 py-2"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <Link href={item.link}>{item.name}</Link>
            {
                show ?
                    <div className="absolute left-56 z-20">
                        {
                            itemHelper(item, "bg-slate-400 -top-8 left-4")
                        }
                    </div>
                    : null
            }
        </li>
    )
}


const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
    return (
        <nav className="pt-4 flex items-center justify-center">
            <ul className="flex items-center space-x-5">
                {menuItems.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </nav>
    )
}

export default DesktopMenu


const helper = (item: {
    name: string;
    icon?: JSX.Element;
}) => {
    const { name, icon } = item;
    return (
        icon ?
            <span className="inline-flex text-xl">{icon}</span> :
            <span className="inline-flex hover:text-blue-800">{name === "Home" ? "" : name}</span>
    )
}

const itemHelper = (item: ItemProps["item"], classes: string = "bg-white top-16") => {
    return (
        item.submenu && item?.submenu?.length > 0 ?
            <SubMenu classes={classes} submenu={item.submenu} /> : null
    )
}