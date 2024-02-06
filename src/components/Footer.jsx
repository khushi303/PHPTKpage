import React from 'react';
import { Tweet, Facebook, Msg, LInkin } from './Iconimg'

const Footer = () => {
    return (
        <div>
            <div className=''>
                <div className='container mx-auto 2xl:max-w-[1330px] xl:pt-[124px] 2xl:px-3 px-[22.5px] pt-[93px] sm:pb-[60px] pb-[21px]'>
                    <div className='flex sm:gap-[21px] gap-[14px] justify-center items-center'>
                        <div className='sm:w-[66.43px] sm:h-[66.43px] hover:bg-black transition-all duration-300 ease-linear w-[42px] h-[42px] rounded-[50%] flex items-center justify-center bg-[#797979]'>
                            <Tweet />
                        </div>
                        <div className='sm:w-[66.43px] sm:h-[66.43px] hover:bg-black transition-all duration-300 ease-linear w-[42px] h-[42px] rounded-[50%] flex items-center justify-center bg-[#797979]'>
                            <Facebook />
                        </div>
                        <div className='sm:w-[66.43px] sm:h-[66.43px] hover:bg-black transition-all duration-300 ease-linear w-[42px] h-[42px] rounded-[50%] flex items-center justify-center bg-[#797979]'>
                            <LInkin />
                        </div>
                        <div className='sm:w-[66.43px] sm:h-[66.43px] hover:bg-black transition-all duration-300 ease-linear w-[42px] h-[42px] rounded-[50%] flex items-center justify-center bg-[#797979]'>
                            <Msg />
                        </div>
                    </div>
                    <div className='mt-[25px] flex flex-col lg:flex-row items-center justify-center lg:gap-[50px] sm:gap-[25px] gap-[15px]'>
                        <a href="" className='sm:text-[30px] text-[16px] font-bold text-[#F59330] leading-[151%]'>Code of Conduct</a>
                        <a href="" className='sm:text-[30px] text-[16px] font-bold text-[#F59330] leading-[151%]'>Privacy Policy</a>
                        <a href="" className='sm:text-[30px] text-[16px] font-bold text-[#F59330] leading-[151%]'>Refund Policy</a>
                    </div>
                    <p className='text-center mt-[25px] sm:text-[30px] text-[16px] cursor-pointer font-normal text-[#26221D] leading-[151%]'>© 2024 PHP Architect, LLC</p>
                </div>
            </div>
        </div>
    )
}

export default Footer