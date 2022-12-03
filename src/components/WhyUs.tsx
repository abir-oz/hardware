import { useEffect, useState } from 'react';
import { whyChooseUs } from '../data/dummy';

const WhyUs = () => {

    // background image position change on scroll
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='p-3 md:px-48  my-24'
            style={{
                backgroundImage: "url('https://www.nke.at/templates/yootheme/cache/22/kreis-element-22cb7781.webp')",
                backgroundSize: "600px 600px",
                backgroundPositionX: `calc(-12% + ${scrollPosition / 10}px)`,
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='flex flex-wrap justify-evenly'>
                {
                    whyChooseUs.map((item, index) => (
                        <div key={index} className='lg:w-1/2'>
                            <div className="md:mx-12 my-3 flex flex-col items-center ">
                                <img src={item.icon}
                                    alt={item.title}
                                    className='w-24 h-24 m-5'
                                />
                                <div className="text-center">
                                    <h3 className='text-xl font-bold m-3'>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    );
};

export default WhyUs;