import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialYoutubeCircular } from "react-icons/ti"

const FollowUs = () => {
    return (
        <div className='my-10'>
            <div className="max-w-full">
                <h5 className="font-medium text-md text-slate-700 text-center">Follow Us</h5>
                <ul className="flex flex-wrap justify-center items-center space-x-4 text-4xl mt-6">
                    <li>
                        <a href="/">
                            <TiSocialLinkedinCircular color="blue" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <TiSocialInstagramCircular color="FF5858" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <TiSocialYoutubeCircular color="red" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <TiSocialFacebookCircular color="blue" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <TiSocialTwitterCircular color="skyblue" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FollowUs