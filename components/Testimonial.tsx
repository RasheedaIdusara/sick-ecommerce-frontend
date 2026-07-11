import Image from 'next/image';
import React from 'react'

const Testimonial = () => {
    return (
        <div >
            <div className='max-w-7xl mx-auto px-4 pt-16 pb-16'>
                <h2 className='font-medium text-2xl pb-4'>Testimonials</h2>
                <div className='grid gap-4 lg:grid-cols-[300px_1fr]'>
                    <div className='border border-gray-300 rounded-2xl p-6 grid place-items-center'> 
                        <div className='text-center flex flex-col items-center gap-1'>
                            <Image className='rounded-full inline-block' src='/user.jpg' alt="User" width={80} height={80} />
                            <h2 className='text-gray-500 font-black text-xl'>Elsa doe</h2>
                            <p>CEO & Founder Invision</p>
                            <Image
                                className="inline-block py-2"
                                src="/quotes.svg"
                                width={30}
                                height={30}
                                alt="quotes"
                            />
                            <p className="max-w-50 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                                sit amet.
                            </p>
                        </div>
                    </div>

                    <div className='bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-125 rounded-2xl grid place-items-center'>
                        <div className='bg-[#ffffffab] min-w-67.5 sm:min-w-75 md:min-w-125 rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                            <button className='bg-blackish text-white p-2 rounded-md'>25% DISCOUNT</button>
                            <h2 className="font-extrabold text-2xl text-[#272727]">
                                Summer Collection
                            </h2>
                            <p className="text-gray-500 text-[20px]">
                                Starting @ $20 <b>Shop Now</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonial