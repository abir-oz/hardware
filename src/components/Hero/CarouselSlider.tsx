import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


const CarouselSlider = () => {
    const prevElRef = useRef<HTMLDivElement>(null);
    const nextElRef = useRef<HTMLDivElement>(null);
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
                clickable: true,
                el: ".pagination-ref",
                renderBullet: function (index, className) {
                    return `<span class="${className} w-6 p-0.5 h-0.5 hover:w-24 transition-all duration-200 rounded-full bg-blue-900  mr-1 cursor-pointer inline-block"></span>`;
                },
            }}
            cssMode={true}
            navigation={{
                prevEl: prevElRef.current!, // Assert non-null
                nextEl: nextElRef.current!, // Assert non-null
            }}
            onBeforeInit={(swiper) => {
                // @ts-ignore         
                swiper.params.navigation.prevEl = prevElRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextElRef.current;
                // swiper.navigation.init();
                swiper.navigation.update();
            }}
            className="w-full h-full"
        >
            <SwiperSlide className='flex justify-center items-center relative'>
                <Image src='https://www.nke.at/templates/yootheme/cache/67/maehdrescher_gespiegelt-67219a2f.webp' alt='hero' width={1000} height={1000} className="md:w-full md:max-h-full min-w-full min-h-[20rem] object-cover" />
                <div className="absolute bottom-0 left-0 top-0 right-0 p-10 flex space-x-4 justify-start items-end">
                    <div className='max-w-md text-white'>
                        <h3 className='text-2xl md:text-4xl italic font-bold'>
                            We keep your
                            wind generators running
                        </h3>
                        <div className='mt-8'>
                            <Link href={'/'} className="bg-orange-600 px-8 py-4 rounded-lg text-md font-bold">
                                Bearing For
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>Slide 2</SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>Slide 3</SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>Slide 4</SwiperSlide>
            <div className="hidden md:block pagination-ref absolute bottom-8 right-12 cursor-pointer  z-20"></div>
            <div className="hidden md:flex items-center space-x-2 absolute top-6 right-12 text-4xl text-slate-100 z-30">
                <div ref={prevElRef} className="hover:text-sky-500">
                    <BsFillArrowLeftCircleFill />
                </div>
                <div ref={nextElRef} className="hover:text-sky-500">
                    <BsFillArrowRightCircleFill />
                </div>
            </div>
        </Swiper>
    );
};

export default CarouselSlider;