import Link from 'next/link'
import { AiFillMail } from 'react-icons/ai'
import { BsArrowDownSquare } from 'react-icons/bs'

const LetUsRolling = () => {
    return (
        <section className='md:px-16 py-10 my-10 bg-gradient-to-r from-blue-500 to-blue-400'>
            <div className='flex flex-wrap items-center justify-center space-y-8 md:space-y-0'>
                <div className='md:w-2/12'>
                    <h3 className='text-3xl font-semibold text-white md:pl-28 italic'>
                        Let's get
                        rolling!
                    </h3>
                </div>
                <div className="md:w-10/12 flex flex-wrap justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
                    <Link href={'/'} className="py-2 px-8 bg-orange-400 flex justify-evenly items-center rounded-lg hover:opacity-75">
                        <span>General Catalogue</span>
                        <span className='inline-flex text-base p-2'>
                            <BsArrowDownSquare />
                        </span>
                    </Link>
                    <Link href={'/'} className="py-2 px-8 bg-blue-600 flex justify-evenly items-center rounded-lg hover:opacity-75">
                        <span>Send Enquiry</span>
                        <span className='inline-flex text-base p-2'>
                            <AiFillMail />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LetUsRolling