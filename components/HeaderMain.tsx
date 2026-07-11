import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const HeaderMain = () => {
    return (
        <div className='border-b border-gray-200 py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:flex justify-between items-center gap-6'>

                
                    <div className='font-bold text-2xl text-center pb-4 sm:pb-0 text-blackish'>Sick</div>
                

                <div className='flex-1 max-w-162.5 relative'>
                    <input className='border-gray-200 border py-1 px-2 rounded-lg w-full' type="text" placeholder="Search Any Product Name..." />
                    <BsSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg'/>
                </div>

                <div className='hidden lg:flex text-gray-500 text-lg gap-4'>
                    <BiUser />
                    <div className='relative'>
                        <FiHeart />
                        <div className='bg-red-600 rounded-full absolute top-[-12] right-0 w-4 h-4 text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
                    </div>

                    <div className='relative'>
                        <HiOutlineShoppingBag />
                        <div className='bg-red-600 rounded-full absolute top-[-12] right-0 w-4 h-4 text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeaderMain