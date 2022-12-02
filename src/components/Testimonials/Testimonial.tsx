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
                    return `<span class="${className} testimonials w-6 p-0.5 h-0.5 hover:w-24 transition-all duration-200 rounded-full bg-slate-800  mr-1 cursor-pointer inline-block z-50"></span>`;
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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-full"
        >
            {
                testiMonials.map((item, index) => (
                    <SwiperSlide className='flex justify-center items-center my-6' key={item.id}>
                        <div className="flex flex-col items-center justify-center md:p-32 p-5">
                            <Image src={item.image} alt='hero' width={200} height={200} className='w-52 h-52 rounded-full' />
                            <div className="max-w-xl text-white flex flex-col gap-4">
                                <p className='text-2xl italic font-bold'>
                                    {item.title}
                                </p>
                                <p className='text-center font-medium'>
                                    {item.name + ' - ' + item.designation}
                                </p>
                                <p className='font-medium'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className="pagination-ref absolute bottom-8 cursor-pointer  z-50 left-1/2 -translate-x-1/2"></div>
            <div className="flex items-center gap-x-2 absolute top-6 right-12 z-10 text-4xl text-slate-100 ">
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