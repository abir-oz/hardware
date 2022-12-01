import React from 'react';
import CarouselSlider from './CarouselSlider';

const Hero = () => {
    return (
        <section className="hero flex">
            <div className="bg-image h-[24.5rem] w-2/5 relative">
                <div className="text-4xl text-yellow-100 absolute top-0 left-0 right-0 bottom-0 bg-blue-300 opacity-30">
                    <span className="hidden">overlay</span>
                </div>
            </div>
            <div className="w-3/5 bg-slate-500">
                <CarouselSlider />
            </div>
        </section>
    );
};

export default Hero;