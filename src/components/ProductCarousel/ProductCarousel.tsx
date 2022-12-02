import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
    BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill
} from "react-icons/bs";
import { Keyboard, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { productCarousel } from "../../data/dummy";
// next typescript functional component type definition

const ProductCarousel = () => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    return (
        <section className="mx-8">
            <Swiper
                modules={[Navigation, Keyboard]}
                spaceBetween={10}
                slidesPerView={1.3}
                loop={true}
                keyboard={true}
                centeredSlides={true}
                navigation={{
                    prevEl: prevRef.current, // Assert non-null
                    nextEl: nextRef.current, // Assert non-null
                }}
                onBeforeInit={(swiper) => {
                    // @ts-ignore         
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.update();
                }}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                className="w-full mt-8 pl-4 relative shadow-inner"
            >
                {productCarousel.map((item) => (
                    <SwiperSlide key={item.id} className="bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden flex items-center rounded-lg">
                        <div className="w-2/5">
                            <div className="p-10 text-white flex flex-col gap-y-8">
                                <h3 className="text-3xl">{item.title}</h3>
                                <p>{item.description}</p>
                                <div>
                                    <Link href="/" className="bg-white hover:bg-blue-700 transition-all duration-300 px-5 py-3 text-sm  text-blue-600 hover:text-white rounded-lg shadow-md">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="rounded-tl-[40rem] w-full pr-0.5"
                            />
                        </div>
                    </SwiperSlide>
                ))}


                <div className="flex items-center gap-x-2 absolute top-6 right-12 z-10 text-4xl text-slate-100 ">
                    <div ref={prevRef} className="hover:text-sky-500">
                        <BsFillArrowLeftCircleFill />
                    </div>
                    <div ref={nextRef} className="hover:text-sky-500">
                        <BsFillArrowRightCircleFill />
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default ProductCarousel;
