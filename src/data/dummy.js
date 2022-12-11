import { AiFillMessage } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GoHome } from "react-icons/go";

export const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: <GoHome />,
  },
  {
    id: 2,
    name: "Company",
    link: "/company",
    submenu: [
      {
        id: 1,
        name: "About NKE",
        link: "/about-nke",
        prefix: "company",
      },
      {
        id: 2,
        name: "Suppliers",
        link: "/suppliers",
        prefix: "company",
      },
      {
        id: 3,
        name: "Distributors",
        link: "/distributors",
        prefix: "company",
        submenu: [
          {
            id: 1,
            name: "Become Distributor",
            link: "/become-distributor",
            prefix: "company-distributor",
          },
        ],
      },
      {
        id: 4,
        name: "Contact",
        link: "/contact",
        prefix: "company",
        submenu: [
          {
            id: 1,
            name: "Management Team",
            link: "/management-team",
            prefix: "company-contact",
          },
          {
            id: 2,
            name: "Sales Team",
            link: "/sales-team",
            prefix: "company-contact",
          },
          {
            id: 3,
            name: "International Representatives",
            link: "/international-representatives",
            prefix: "company-contact",
          },
        ],
      },
      {
        id: 5,
        name: "Directions",
        link: "/directions",
        prefix: "company",
      },
    ],
  },
  {
    id: 3,
    name: "Bearings/Applications",
    link: "/bearings-applications",
    submenu: [
      {
        id: 1,
        name: "Standard Bearings",
        link: "/standard-bearings",
        prefix: "bearings-applications",
      },
      {
        id: 2,
        name: "Special Bearings",
        link: "/special-bearings",
        prefix: "bearings-applications",
      },
      {
        id: 3,
        name: "Applications",
        link: "/applications",
        prefix: "bearings-applications",
      },
    ],
  },
  {
    id: 4,
    name: "Engineering",
    link: "/engineering",
    submenu: [
      {
        id: 1,
        name: "Bearing College",
        link: "/bearing-college",
        prefix: "engineering",
        submenu: [
          {
            id: 1,
            name: "Standard Courses",
            link: "/standard-courses",
            prefix: "engineering-bearing-college",
          },
          {
            id: 2,
            name: "Special Courses",
            link: "/special-courses",
            prefix: "engineering-bearing-college",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Value Proposition",
    link: "/value-proposition",
  },
  {
    id: 6,
    name: "Production / Quality",
    link: "/production-quality",
  },
  {
    id: 7,
    name: "News",
    link: "/news",
  },
  {
    id: 8,
    name: "Careers",
    link: "/careers",
    submenu: [
      {
        id: 1,
        name: "Job Vacancies",
        link: "/job-vacancies",
        prefix: "careers",
      },
      {
        id: 2,
        name: "Online Application",
        link: "/online-application",
        prefix: "careers",
      },
    ],
  },
];

export const topBarItems = [
  {
    id: 1,
    name: "Careers",
    link: "/careers",
    icon: <BsFillBriefcaseFill size={16} />,
  },
  {
    id: 2,
    name: "Contact",
    link: "/contact",
    icon: <AiFillMessage size={16} />,
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Quality has only one alternative: QUALITY",
    description:
      "By using advanced testing and measuring equipment and a rigorous quality policy, we guarantee that every rolling bearing delivered meets the highest quality standards.",
    icon: "https://www.nke.at/templates/yootheme/cache/8c/icon-qualitaet-8c706b0a.webp",
  },
  {
    id: 2,
    title: "On-site support - WORLDWIDE",
    description:
      "More than 240 trading partners in over 60 countries guarantee our customers rapid availability, short delivery routes and direct support.",
    icon: "https://www.nke.at/templates/yootheme/cache/6e/icon-weltweit-6e089923.webp",
  },
  {
    id: 3,
    title: "Sustainable growth for generations",
    description:
      "We are constantly striving to minimize the environmental impact in all areas of the company in order to leave future generations not only our know-how, but also a healthy environment.",
    icon: "https://www.nke.at/templates/yootheme/cache/dd/icon-wachstum-ddf764c6.webp",
  },
  {
    id: 4,
    title: "Progress before perfection",
    description:
      "What matters is that we strive every day to be better than yesterday. We do not let ourselves be guided by the fear of making mistakes, but actively take on every challenge.",
    icon: "https://www.nke.at/templates/yootheme/cache/f1/icon-fortschritt-f176eb51.webp",
  },
];

export const productCarousel = [
  {
    id: 1,
    title: "Bearings with ceramic rolling elements",
    description: "Tough industrial applications require special bearings.",
    image:
      "https://www.nke.at/templates/yootheme/cache/ab/F%C3%B6rderb%C3%A4nder-ab7280c4.webp",
  },
  {
    id: 2,
    title: "Becoming a NKE distributor",
    description:
      "We are looking for new partners in the field of rolling bearings.",
    image:
      "https://www.nke.at/templates/yootheme/cache/f2/Versand-f21f16e2.webp",
  },
  {
    id: 3,
    title: "Bearings for conveyor belts",
    description:
      "One of the most vital parts of the rollers/idlers in the conveyor belts are the bearings.",
    image:
      "https://www.nke.at/templates/yootheme/cache/49/Inch_Size_2_rgb-49faaca0.webp",
  },
];

export const moreAboutNke = [
  {
    id: 1,
    title: "History",
    link: "/history",
  },
  {
    id: 2,
    title: "Quality Process and Certifications",
    link: "/quality-process-and-certifications",
  },
  {
    id: 3,
    title: "News",
    link: "/news",
  },
  {
    id: 4,
    title: "Training Courses & Seminars",
    link: "/training-courses-and-seminars",
  },
  {
    id: 5,
    title: "Distributors Worldwide",
    link: "/distributors-worldwide",
  },
  {
    id: 6,
    title: "Career",
    link: "/career",
  },
];

export const testiMonials = [
  {
    id: 1,
    name: "Michael Rößl",
    designation: "Applications Engineer",
    title:
      '"What drives me is the agile, innovative and flexible culture at NKE. There is the chance to make a real impact!"',
    description:
      "Throughout my employment at NKE I've worked within dynamic collaborative teams on challenging, innovative, long-term projects in the worldwide acting FERSA Group. In general, as Application Engineer I'm working at the gateway between industrial economics and engineering. I'm challenged and at the same time highly motivated to find new innovative solutions to solve problems related to the bearing industry. From the very beginning, I got the chance to take over responsibility and contribute to the company's success.",
    image:
      "https://www.nke.at/templates/yootheme/cache/89/Michael_R%C3%B6ssl_NKE_rgb-898565ea.webp",
  },
  {
    id: 2,
    name: "Adis Guso",
    designation: "Employees Manufacturing & Production",
    title:
      "I am proud to be part of such a great CMS team with great work colleagues!",
    description:
      'I joined NKE in 2018 following a recommendation through a foundation programme. Supported by my manager and a lot of initiative, I have already achieved a lot.For me, NKE is a very friendly " family company " - with a top working atmosphere. I am proud to be part of the CMS team, together we have managed to overcome hurdles and increase our efficiency through our team spirit. ',
    image:
      "https://www.nke.at/templates/yootheme/cache/b1/Adis_Guso-b1a0ea47.webp",
  },
  {
    id: 3,
    name: "Veronika Krempl",
    designation: "Head of Information Management",
    title: "Joining the NKE 16 years ago was a great opportunity for me.",
    description:
      "It was a great opportunity for me to join NKE in 2005. As a trainee during my studies at the University of Applied Sciences in Steyr, I started to contribute my part to the team and today I manage a department and drive NKE forward with digitalisation. Even after so long, I still enjoy coming to the company every day, have fun at work and look forward to working with my colleagues.",
    image:
      "https://www.nke.at/templates/yootheme/cache/1c/Veronika_Krempl-1ce3fc1c.webp",
  },
];

export const latestNews = [
  {
    id: 1,
    date: "2 December 2022",
    title: "NKE Austria is recertified to ISO",
    image: "https://www.nke.at/images/news/2022/Bild_1_NKE_ISO.jpg",
    excerpt:
      "Bearing manufacturer NKE Austria GmbH has again passed the ISO audit.",
    description: "",
  },
  {
    id: 2,
    date: "2 December 2022",
    title: "Bearings from NKE for wind turbine gearboxes and generators",
    image:
      "https://www.nke.at/images/news/2022/Pic_3_NKE_6330-C3-HYB_1500px_72dpi_1.png",
    excerpt:
      "NKE Austria GmbH designs and manufactures bearings for wind turbine gearboxes and generators. The bearing solutions were presented at the WindEurope Annual Event in Bilbao, Spain, in April 2022.",
    description: "",
  },
  {
    id: 3,
    date: "2 December 2022",
    title: "NKE Austria has a new Managing Director",
    image:
      "https://www.nke.at/images/news/2022/Matthias-Ortner-NKE-Austria_300dpi_1500px_WEB_quer.JPG",
    excerpt:
      "Bearing specialist NKE Austria GmbH has a new Managing Director: Matthias Ortner, previously the Deputy Managing Director, was appointed Managing Director of the Steyr-based bearing manufacturer with effect from 2022",
    description: "",
  },
];
