import CarouselSlider from './CarouselSlider';

const Hero = () => {
    return (
        <section className="home-hero flex">
            <div className="bg-image md:w-2/5 relative md:block hidden">
                <div className="text-4xl text-yellow-100 absolute top-0 left-0 right-0 bottom-0 bg-blue-300 opacity-25">
                    <span className="hidden">overlay</span>
                </div>
            </div>
            <div className="md:w-3/5 w-full bg-slate-500">
                <CarouselSlider />
            </div>
        </section>
    );
};

export default Hero;