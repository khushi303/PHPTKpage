import React from 'react';
import { Commas } from './Iconimg'

const Conference = () => {
    return (
        <div id='SPEAKERS' className="xl:bg-[url('./assets/images/png/blueimg.png')] xl:bg-no-repeat xl:bg-center xl:bg-cover">
            <div className='max-xl:bg-[#F59330]'>
                <div className='container mx-auto 2xl:max-w-[1459px] 2xl:px-3 px-[24px] xl:translate-y-[-66px]'>
                    <div className='xl:bg-[#F59330] xl:rounded-[65px] w-full flex flex-col xl:flex-row gap-[8px] lg:gap-[25px] xl:gap-[unset] justify-between items-center lg:pt-[30px] pt-[33px] xl:pb-[32px] pb-[50px] xl:pl-[96px] xl:pr-[45px]'>
                        <p className='text-[30px] font-semibold text-white leading-[151%]'>Conference Attendee</p>
                        <div className='flex lg:flex-row flex-col items-center'>
                            <p className='text-[30px] font-bold text-white leading-[153%] lg:mr-[20px] max-lg:mb-[13px]'>$700</p>
                            <button className='sm:py-[17px] py-[12px] sm:px-[40.5px] px-[32px] bg-white hover:bg-transparent border-[2px] border-solid border-transparent hover:border-white transition-all hover:text-white duration-300 ease-linear sm:text-[24px] text-[20px] font-normal rounded-[50px] leading-[152%] text-black lg:mr-[17px] max-lg:mb-[17px]'>EXPIRED</button>
                            <button className='sm:py-[17px] py-[12px] hover:text-black border-[2px] border-solid border-transparent hover:border-black hover:bg-transparent transition-all duration-300 ease-linear sm:px-[55px] px-[86.5px] leading-[152%] bg-black sm:text-[24px] text-[20px] font-normal rounded-[50px] text-white'>VIEW SCHEDULE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-xl:bg-[url('./assets/images/png/blueimg.png')] max-xl:bg-no-repeat max-xl:bg-center max-xl:bg-cover">
                <div className='container mx-auto 2xl:max-w-[1330px] pt-[36px] 2xl:px-3 px-[22.5px] xl:pb-[116px] pb-[79px]'>
                    <div className='xl:border-[3px] border-solid  border-white relative rounded-[132px] pt-[58px] pb-[35px] w-full flex items-center justify-center flex-col sm:px-4'>
                        <div className='max-xl:block hidden'>
                            <Commas />
                        </div>
                        <p className='md:text-[39px] text-[20px] font-black leading-[151%] text-white text-center max-xl:mt-[10px] max-w-[1109px] max-sm:max-w-[328px] sm:px-6'>This was my first introduction to php[architect]’s conferences, and they’ve quickly become my favorites. A great balance of fun and education, structured and social. The organizers obviously care about the conference and the enjoyment of everyone who attends, and I can’t wait for the next one!   </p>
                        <p className='md:text-[36px] text-[20px] md:mt-[25px] mt-[36px] font-bold text-center text-white leading-[150%]'>― Previous Attendee</p>
                        {/* <p className='text-[139px] font-bold leading-[100%] text-white text-center absolute'>“</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conference;