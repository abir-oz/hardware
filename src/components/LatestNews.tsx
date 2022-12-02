import Image from "next/image"
import { latestNews } from "../data/dummy"

const LatestNews = () => {
    return (
        <div className="my-10">
            <div className="max-w-7xl mx-auto px-12">
                <h1 className="text-4xl font-bold text-blue-700">Latest News</h1>
                <div className="flex justify-between mt-6 gap-12">
                    {
                        latestNews.map((news, index) => (
                            <div key={index} className="w-1/3">
                                <div className="max-w-sm">
                                    <Image src={news.image} alt="thumb" width={400} height={220} className="max-w-full max-h-full h-60 w-full object-cover rounded-md shadow"
                                        loading="lazy" />
                                    <div className="mt-3">
                                        <p className="text-slate-600 mb-3 text-sm">{news.date}</p>
                                        <h3 className="text-xl font-bold text-blue-700">{news.title}</h3>
                                        <p className="text-gray-500">{news.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestNews