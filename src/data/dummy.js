import { AiFillMessage } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';

export const menuItems = [
    {
        id: 1,
        name: 'Home',
        link: '/',
        icon: <GoHome />,
    },
    {
        id: 2,
        name: 'About',
        link: '/about',
        icon: '',
    },
    {
        id: 3,
        name: 'Contact',
        link: '/contact',
        icon: '',
    },
];

export const topBarItems = [
    {
        id: 1,
        name: 'Careers',
        link: '/careers',
        icon: <BsFillBriefcaseFill size={16} />,
    },
    {
        id: 2,
        name: 'Contact',
        link: '/contact',
        icon: <AiFillMessage size={16} />,
    },
];

export const whyChooseUs = [
    {
        id: 1,
        title: 'Quality has only one alternative: QUALITY',
        description: 'By using advanced testing and measuring equipment and a rigorous quality policy, we guarantee that every rolling bearing delivered meets the highest quality standards.',
        icon: 'https://www.nke.at/templates/yootheme/cache/8c/icon-qualitaet-8c706b0a.webp',
    },
    {
        id: 2,
        title: 'On-site support - WORLDWIDE',
        description: 'More than 240 trading partners in over 60 countries guarantee our customers rapid availability, short delivery routes and direct support.',
        icon: 'https://www.nke.at/templates/yootheme/cache/6e/icon-weltweit-6e089923.webp',
    },
    {
        id: 3,
        title: 'Sustainable growth for generations',
        description: 'We are constantly striving to minimize the environmental impact in all areas of the company in order to leave future generations not only our know-how, but also a healthy environment.',
        icon: 'https://www.nke.at/templates/yootheme/cache/dd/icon-wachstum-ddf764c6.webp',
    },
    {
        id: 4,
        title: 'Progress before perfection',
        description: "What matters is that we strive every day to be better than yesterday. We do not let ourselves be guided by the fear of making mistakes, but actively take on every challenge.",
        icon: 'https://www.nke.at/templates/yootheme/cache/f1/icon-fortschritt-f176eb51.webp',
    }
];

export const productCarousel = [
    {
        id: 1,
        title: "Bearings with ceramic rolling elements",
        description: "Tough industrial applications require special bearings.",
        image: "https://www.nke.at/templates/yootheme/cache/ab/F%C3%B6rderb%C3%A4nder-ab7280c4.webp",
    },
    {
        id: 2,
        title: "Becoming a NKE distributor",
        description: "We are looking for new partners in the field of rolling bearings.",
        image: "https://www.nke.at/templates/yootheme/cache/f2/Versand-f21f16e2.webp",
    },
    {
        id: 3,
        title: "Bearings for conveyor belts",
        description: "One of the most vital parts of the rollers/idlers in the conveyor belts are the bearings.",
        image: "https://www.nke.at/templates/yootheme/cache/cd/F%C3%B6rderb%C3%A4nder-cd2f3a91.webp",
    }
];
