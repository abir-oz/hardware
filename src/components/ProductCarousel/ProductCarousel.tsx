import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill
} from "react-icons/bs";
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { productCarousel } from "../../data/dummy";
// next typescript functional component type definition

const ProductCarousel = () => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    return (
        <section className="mx-8">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={10}
                slidesPerView={1.3}
                loop={true}
                centeredSlides={true}
                navigation={{
                    prevEl: prevRef.current, // Assert non-null
                    nextEl: nextRef.current, // Assert non-null
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="w-full mt-8 pl-4 relative"
            >
                {/* {productCarousel.map((item) => (
                    <SwiperSlide key={item.id} className="bg-blue-900 overflow-hidden flex items-center rounded-lg">
                        <div className="bg-blue-900 w-2/5">
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
                                className="rounded-tl-[40rem] w-full"
                            />
                        </div>
                    </SwiperSlide>
                ))} */}

                
                <div className="flex items-center gap-x-3 absolute top-6 right-10 z-10 text-4xl text-slate-100 ">
                    <div ref={prevRef} className="hover:text-sky-500">
                        <BsFillArrowLeftSquareFill />
                    </div>
                    <div ref={nextRef} className="hover:text-sky-500">
                        <BsFillArrowRightSquareFill />
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default ProductCarousel;
