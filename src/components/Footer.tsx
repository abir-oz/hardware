import Image from 'next/image'
import Link from 'next/link'
import { AiFillMessage } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r  from-blue-600 to-blue-700'>
            <div className="py-16  text-sm md:text-md text-justify"
                style={
                    {
                        backgroundSize: '520px 520px',
                        backgroundImage: 'url(https://www.nke.at/templates/yootheme/cache/f8/wirbel_white-f880d3d3.webp)',
                        backgroundPosition: '2% -10%',
                        backgroundRepeat: 'no-repeat',
                    }
                }
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between">
                        <div className="lg:w-1/4 md:w-1/2">
                            <div className="p-5 space-y-6">
                                <Image src={"https://www.nke.at/templates/yootheme/cache/3f/Fersa%20Group%20Logo_White%202022-3f0645f9.webp"}
                                    alt="Fersa Group Logo"
                                    width={200}
                                    height={50}
                                />
                                <p>
                                    Since 2018, Fersa Bearings, based in Zaragoza, Spain, has held 100 per cent of the shares in NKE Austria.
                                </p>
                                <p>
                                    <a href="https://www.fersa.com" target="_blank" rel="noopener">www.fersa.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2">
                            <div className="p-5 space-y-6">
                                <p className='text-white'>NKE Austria</p>
                                <p>
                                    Im Stadtgut C4
                                    <br />
                                    4407 Steyr, Austria
                                </p>
                                <p>
                                    T: <a href="tel:+43725286667">+43 (7252) 86667</a>
                                    <br />
                                    F: +43 (7252) 86667 59
                                    <br />
                                    <a href="mailto:office@nke.at">office@nke.at</a>
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2">
                            <div className="p-5 space-y-6">
                                <p className='text-white'>Discover NKE</p>
                                <ul>
                                    <li><a href="/">NKE Webshop</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">Download</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2">
                            <div className="p-5 space-y-6">
                                <h3 className='text-2xl font-bold italic text-white'>
                                    Let's get
                                    <br />
                                    rolling!
                                </h3>
                                <div className='my-5'>
                                    <Link href="/" className='no-underline inline-flex items-center space-x-2 bg-orange-500 px-6 py-3 rounded-sm shadow text-md'>
                                        <span>Send Inquiry</span>
                                        <span className='inline-flex'><AiFillMessage size={16} /></span>
                                    </Link>
                                </div>
                                <div className='flex'>
                                    <a href="/">
                                        <img src="https://www.nke.at/images/logos/EPDTA-Member_weiss.png" alt="" />
                                    </a>
                                    <a href="/">
                                        <img src="https://www.nke.at/images/logos/WindEurope-Primary-White.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 text-center">
                        <ul className='space-x-4'>
                            <li className='inline-block'><a href="/">Imprint</a></li>
                            <li className='inline-block'><a href="/">Privacy Policy</a></li>
                            <li className='inline-block'><a href="/">Terms of Use</a></li>
                            <li className='inline-block'><a href="/">Sitemap</a></li>
                            <li className='inline-block'><a href="/">Legal Notice</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer