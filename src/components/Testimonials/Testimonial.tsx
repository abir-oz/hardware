import Image from 'next/image';
import { useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testiMonials } from '../../data/dummy';

const Testimonial = () => {
    const prevElRef = useRef<HTMLDivElement>(null);
    const nextElRef = useRef<HTMLDivElement>(null);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
                clickable: true,
                el: ".pagination-ref",
                renderBullet: function (index, className) {
                    return `<span class="${className} testimonials w-2 p-0.5 h-0.5 hover:w-8 transition-all duration-200 rounded-full bg-slate-800  mr-1 cursor-pointer inline-block z-50"></span>`;
                },
            }}
            cssMode={true}
            navigation={{
                prevEl: prevElRef.current, // Assert non-null
                nextEl: nextElRef.current, // Assert non-null
            }}
            onBeforeInit={(swiper) => {
                // @ts-ignore         
                swiper.params.navigation.prevEl = prevElRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextElRef.current;
                // swiper.navigation.init();
                swiper.navigation.update();
            }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="max-w-2xl h-full px-6 relative"
        >
            {
                testiMonials.map((item, index) => (
                    <SwiperSlide className='py-16 px-6 md:px-0' key={index}>
                        <div className="flex flex-col items-center justify-center">
                            <Image src={item.image} alt='hero' width={200} height={200} className='w-52 h-52 rounded-full' />
                            <div className="max-w-xl text-white flex flex-col space-y-4 text-justify">
                                <h3 className='text-2xl italic font-bold'>
                                    {item.title}
                                </h3>
                                <p className='text-center font-medium'>
                                    {item.name + ' - '}
                                    <strong>{item.designation}</strong>
                                </p>
                                <p className='font-medium'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className="pagination-ref absolute bottom-8 cursor-pointer left-1/2 -translate-x-1/2 z-30"></div>
            <div className="flex items-center space-x-2 absolute top-6 right-12 text-4xl text-slate-100 z-30">
                <div ref={prevElRef} className="hover:text-sky-500">
                    <BsFillArrowLeftCircleFill />
                </div>
                <div ref={nextElRef} className="hover:text-sky-500">
                    <BsFillArrowRightCircleFill />
                </div>
            </div>
        </Swiper>
    )
}

export default Testimonial