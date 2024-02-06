import React from 'react';
import Gettogetherimg from '../assets/images/png/gettogetherimg.png';

const Sponsor = () => {
    return (
        <>
            <div id='SPONSORS'>
                <div className='mx-auto sm:mt-[27px] mt-[20px] relative'>
                    <div className="xl:w-7/12 w-full bg-[url('./assets/images/png/sponsororgimg.png')] relative z-10 md:pt-[118px] pt-[57px] md:pb-[100px] pb-[57px] lg:bg-FullSize bg-FullSize2 lg:bg-center bg-Lefttop">
                        <div data-aos="zoom-in-up" className='flex items-center 2xl:justify-end 2xl:pr-[62px] justify-center px-4'>
                            <p className='md:text-[36px] text-[20px] font-black text-white sm:max-w-[854px] text-center max-w-[293px] sm:mb-[32px] mb-[24px] leading-[135%]'>Interested in becoming a sponsor and getting exposure to our audience?</p>
                        </div>
                        <div data-aos="zoom-in-up" className='flex items-center justify-center'>
                            <button className='sm:text-[24px] text-[20px] font-normal hover:text-black border-[2px] border-solid border-transparent hover:border-black hover:bg-transparent transition-all duration-300 ease-linear sm:py-[17px] py-[12px] sm:px-[62.5px] px-[63.5px] bg-black text-white rounded-[60px] leading-[151%]'>SPONSOR THE EVENT</button>
                        </div>
                    </div>
                    <div className='xl:absolute top-0 bottom-0 right-0 max-xl:w-full xl:translate-y-[unset] sm:translate-y-[-238px] translate-y-[-109px]'>
                        <img src={Gettogetherimg} alt="Gettogetherimg" className='w-full xl:h-full object-cover object-center xl:max-w-[1229px] md:h-[754px] h-[514px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsor