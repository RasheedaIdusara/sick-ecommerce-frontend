import React from 'react'
import {FiHeart} from 'react-icons/fi';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {IoMenuOutline} from 'react-icons/io5';
import {AiOutlineHome,AiOutlineAppstore} from 'react-icons/ai'

const MobileNavbar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white p-2'>
        <div className='flex justify-between text-[24px] py-2'>
            <IoMenuOutline/>
            <div className='relative'>
                <HiOutlineShoppingBag/>
                <div className='bg-red-600 rounded-full absolute top-[-12] left-0 w-4 h-4 text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
            </div>
        

        <AiOutlineHome/>

        <div className='relative'>
            <FiHeart/>
            <div className='bg-red-600 rounded-full absolute top-[-12] left-0 w-4 h-4 text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
        </div>

        <AiOutlineAppstore/>
    </div>
    </div>
  );
}

export default MobileNavbar