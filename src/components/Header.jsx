import React, { useState } from 'react';
import Logo from '../assets/images/png/logo.png';
import Headerimg from '../assets/images/png/headerimg.png';
import Orangeimg1 from '../assets/images/png/toporbox.png';
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
            <div className='container mx-auto 2xl:max-w-[1638px] 2xl:px-3 pr-[21.93px] pl-[25.18px] 2xl:pt-[121px] sm:pt-[25px] 2xl:mb-[47px] pt-[9px] mb-[28px] z-20 relative'>
                <div className='flex items-center 2xl:justify-end justify-between relative'>
                    <img data-aos="fade-up" src={Logo} alt="Logo" className='2xl:max-w-[301px] cursor-pointer lg:max-w-[150px] sm:max-w-[100px] max-w-[52px] w-full 2xl:absolute left-0 top-[-75px] z-[4]' />
                    <div className={`${nav ? "left-[-101%]" : "left-0"} flex max-xl:fixed max-xl:top-0 max-xl:transition-all max-xl:duration-300 max-xl:ease-linear max-xl:h-full max-xl:z-20 max-xl:w-full max-xl:min-h-screen max-xl:bg-white max-xl:flex-col max-xl:justify-center items-center gap-[40.56px]`}>
                        <ul className='flex xl:flex-row flex-col items-center xl:gap-[72px] gap-[40.56px]'>
                            <li onClick={() => setNav(!nav)}><a href="#SEHEDULE" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-[#1A1A1A] after:h-[2px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>SEHEDULE</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#SPEAKERS" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-[#1A1A1A] after:h-[2px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>SPEAKERS</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#SPONSORS" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-[#1A1A1A] after:h-[2px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>SPONSORS</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#VENUE" className='text-[24px] font-normal text-[#1A1A1A] !leading-[36px] after:absolute after:bottom-[-4px] after:left-[50%] after:w-0 after:bg-[#1A1A1A] after:h-[2px] hover:after:w-full relative after:right-0 hover:after:left-0 after:transition-all after:duration-300 after:rounded-[5px] after:ease-linear'>VENUE</a></li>
                        </ul>
                        <button className='sm:py-[13px] py-[11px] sm:px-[63.5px] px-[50px] bg-[#EE612F] border-[2px] border-solid border-[#EE612F] hover:border-white rounded-[50px] text-[24px] leading-[36px] text-[#F0F0F0] hover:bg-transparent transition-all duration-300 ease-linear whitespace-nowrap'>REGISTER NOW</button>
                    </div>
                    <div onClick={() => setNav(!nav)} className='lg:hidden w-[27px] h-[18px] relative z-20 flex justify-between flex-col'>
                        <span className={`${nav ? 'bg-white h-[3px] w-full duration-300 ease-linear transition-all' : "bg-[#EE612F] transition-all duration-300 ease-linear h-[3px] w-full rotate-[50deg] translate-y-[13px]"}`}></span>
                        <span className={`${nav ? 'bg-white h-[3px] w-full duration-300 ease-linear transition-all' : "duration-300 ease-linear transition-all hidden"}`}></span>
                        <span className={`${nav ? 'bg-white h-[3px] w-full duration-300 ease-linear transition-all' : "bg-[#EE612F] transition-all duration-300 ease-linear h-[3px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                    </div>
                </div>
            </div>
            <div className='container mx-auto 2xl:max-w-[1638px] 2xl:px-3 lg:mb-[86px] mb-[41px] pl-[25.18px] pr-[24.87px] relative z-[2]'>
                <img data-aos="zoom-in" src={Headerimg} alt="Headerimg" className='w-full 2xl:rounded-none 2xl:h-auto xl:h-[650px] h-[524px] max-xl:object-cover max-xl:object-center max-xl:rounded-[10px]' />
                <div data-aos="fade-up" className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
                    <p className='lg:text-[90px] md:text-[50px] text-[48px] sm:max-w-[unset] max-w-[259px] md:leading-[135px] leading-[72px] font-black text-white text-center px-4'>PHP[TEK] 2024</p>
                </div>
            </div>
            <div className='sm:max-w-[590px] max_w_200 max-w-[260px] absolute z-[3] lg:top-[0] sm:top-[-71px] lg:right-[-209px] xl:right-[0] sm:right-[-220px] right-[-21%] top-[-3%]'>
                <img src={Orangeimg1} alt="Orangeimg1" className='w-full' />
            </div>
            <div className='2xl:max-w-[793px] xl:max-w-[643px] md:max-w-[450px] sm:max-w-[353px] max-w-[190px] absolute bottom-0 right-0 z-[1]'>
                <img src={orangeimg2} alt="orangeimg2" className='w-full' />
            </div>
            <div className='2xl:max-w-[1126px] xl:max-w-[803px] lg:max-w-[600px] sm:max-w-[386px] max-w-[188px] absolute left-0 bottom-0'>
                <img src={Grayimg1} alt="Grayimg1" className='w-full' />
            </div>
            <div className='lg:max-w-[580px] max_w_200s max-w-[260px] sm:max-w-[388px] max-w-[219p x] absolute top-0 sm:left-0 left-[-21%]'>
                <img src={Grayimtop} alt="Grayimtop" />
            </div>
        </div>
    )
}

export default Header