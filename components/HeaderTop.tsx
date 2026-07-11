import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs';


const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className='header_top_icon_wrapper'>
                        <BsFacebook/>
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsTwitter/>
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsInstagram/>
                    </div>
                    <div className='header_top_icon_wrapper'>
                        <BsLinkedin/>
                    </div>
                </div>
                <div className='text-gray-500 text-[12px]'>
                    <strong>FREE SHIPPING  </strong>
                    THIS WEEK ORDER OVER - $55
                </div>
                <div className='flex gap-4'>
                    <select name='currency' id='currency' className='text-gray-500 text-[12px] w-17.5'>
                        <option value='USD'>USD $</option>
                        <option value='EUR'>EUR €</option>
                        <option value='GBP'>GBP £</option>
                        <option value='LKR'>LKR ₨</option>
                    </select>

                    <select name='language' id='language' className='text-gray-500 text-[12px] w-17.5'>
                        <option value='EN'>EN</option>
                        <option value='FR'>FR</option>
                        <option value='ES'>ES</option>
                        <option value='DE'>DE</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeaderTop