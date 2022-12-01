import { whyChooseUs } from '../data/dummy';

const WhyUs = () => {
    return (
        <section className='m-3 md:mx-48'>
            <div className='flex flex-wrap justify-evenly'>
                {
                    whyChooseUs.map((item, index) => (
                        <div key={index} className='w-full lg:w-1/2'>
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
        </section>
    );
};

export default WhyUs;