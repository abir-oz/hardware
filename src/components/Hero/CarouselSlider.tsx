import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


const CarouselSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-full text-3xl"
        >
            <SwiperSlide className='flex justify-center items-center'>Slide 1</SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>Slide 2</SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>Slide 3</SwiperSlide>
            <SwiperSlide className='flex justify-center items-center'>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default CarouselSlider;