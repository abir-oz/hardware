import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { moreAboutNke } from "../data/dummy";

const YoutubeVideos = () => {
    const [hasWindow, setHasWindow] = useState<Boolean>(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="p-3 md:px-48 my-24"
            style={{
                backgroundImage: "url('https://www.nke.at/templates/yootheme/cache/22/kreis-element-22cb7781.webp')",
                backgroundSize: "550px 550px",
                backgroundPositionX: `calc(120% + -${scrollPosition / 7}px)`,
                backgroundRepeat: "no-repeat"
            }}
        >   <div className="mx-auto max-w-3xl">
                <div className="flex flex-wrap items-center justify-center">
                    {hasWindow && <ReactPlayer
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='800px'
                        height='450px'
                        light={true}
                        controls={true}
                        playing={true}
                    />}
                </div>
                <div className="mt-2">
                    <h3 className="text-3xl leading-normal font-semibold text-blue-700">More about NKE Austria and the Fersa Group</h3>
                    <ul className="columns-2 mt-3">
                        {
                            moreAboutNke.map((item, index) => (
                                <li key={index} className="text-slate-700 font-medium py-3 border-t-[1px]">
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default YoutubeVideos