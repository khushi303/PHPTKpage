import React, { useState } from 'react';
import Logo from '../assets/images/png/logo.png';
import Headerimg from '../assets/images/png/headerimg.png';
import Orangeimg1 from '../assets/images/png/orgimgtop.png';
import orangeimg2 from '../assets/images/png/bottomorbox.png';
import Grayimg1 from '../assets/images/png/bottomgraybox.png';
import Grayimtop from '../assets/images/png/topgraybox.png';

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-xl:overflow-hidden")

    } else {
        document.body.classList.remove("max-xl:overflow-hidden")
    }
    return (
        <div className='relative overflow-hidden'>
            <div className='container mx-auto 2xl:max-w-[1638px] 2xl:px-3 pr-[21.93px] pl-[25.18px] 2xl:pt-[121px] sm:pt-[60px] lg:mb-[47px] pt-[9px] mb-[28px] z-20 relative'>
                <div className='flex items-center 2xl:justify-end justify-between relative'>
                    <img src={Logo} alt="Logo" className='2xl:max-w-[301px] lg:max-w-[150px] sm:max-w-[100px] max-w-[52px] w-full 2xl:absolute left-0 top-[-75px] z-[4]' />
                    <div className={`${nav ? "left-[-101%]" : "left-0"} flex max-xl:fixed max-xl:top-0 max-xl:transition-all max-xl:duration-300 max-xl:ease-linear max-xl:h-full max-xl:z-20 max-xl:w-full max-xl:min-h-screen max-xl:bg-white max-xl:flex-col max-xl:justify-center items-center gap-[40.56px]`}>
                        <ul className='flex xl:flex-row flex-col items-center xl:gap-[72px] gap-[40.56px]'>
                            <li onClick={() => setNav(!nav)}><a href="#SEHEDULE" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px]'>SEHEDULE</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#SPEAKERS" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px]'>SPEAKERS</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#SPONSORS" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px]'>SPONSORS</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#VENUE" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px]'>VENUE</a></li>
                        </ul>
                        <button className='sm:py-[13px] py-[11px] sm:px-[63.5px] px-[50px] bg-[#EE612F] border-[2px] border-solid border-[#EE612F] hover:border-white rounded-[50px] text-[24px] leading-[36px] text-[#F0F0F0] hover:bg-transparent transition-all duration-300 ease-linear whitespace-nowrap'>REGISTER NOW</button>
                    </div>
                    <div onClick={() => setNav(!nav)} className='xl:hidden w-[27px] max-xl:z-20 h-[21px] relative z-[7] flex justify-between flex-col'>
                        <svg className='w-[28px] h-[18px] sm:w-[35px] sm:h-[35px]' viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={nav ? "fill-[white]" : "fill-[#EE612F]"} d="M0.854492 18.0067V15.0339H27.6097V18.0067H0.854492ZM0.854492 10.5747V7.60192H27.6097V10.5747H0.854492ZM0.854492 3.14272V0.169922H27.6097V3.14272H0.854492Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='container mx-auto 2xl:max-w-[1638px] 2xl:px-3 lg:mb-[86px] mb-[41px] pl-[25.18px] pr-[24.87px] relative z-[2]'>
                <img src={Headerimg} alt="Headerimg" className='w-full 2xl:rounded-none 2xl:h-auto xl:h-[650px] h-[524px] max-xl:object-cover max-xl:object-center max-xl:rounded-[10px]' />
                <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
                    <p className='lg:text-[90px] md:text-[50px] text-[48px] sm:max-w-[unset] max-w-[259px] md:leading-[135px] leading-[72px] font-black text-white text-center px-4'>PHP[TEK] 2024</p>
                </div>
            </div>
            <div className='sm:max-w-[630px] max-w-[200px] absolute z-[3] lg:top-[-44px] sm:top-[-71px] lg:right-[-209px] xl:right-[-26px] sm:right-[-220px] right-[-21%] top-[-3%]'>
                <img src={Orangeimg1} alt="Orangeimg1" className='w-full' />
            </div>
            <div className='2xl:max-w-[793px] xl:max-w-[643px] sm:max-w-[500px] max-w-[190px] absolute bottom-0 right-0 z-[1]'>
                <img src={orangeimg2} alt="orangeimg2" className='w-full' />
            </div>
            <div className='2xl:max-w-[1126px] xl:max-w-[803px] sm:max-w-[700px] max-w-[188px] absolute left-0 bottom-0'>
                <img src={Grayimg1} alt="Grayimg1" className='w-full' />
            </div>
            <div className='lg:max-w-[580px] sm:max-w-[388px] max-w-[219px] absolute top-0 sm:left-0 left-[-21%]'>
                <img src={Grayimtop} alt="Grayimtop" />
            </div>
        </div>
    )
}

export default Header