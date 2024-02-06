import React from 'react';
import Slider from "react-slick";
import Img1 from '../assets/images/png/img1.png';
import Img2 from '../assets/images/png/img2.png';
import Img3 from '../assets/images/png/img3.png';
import Img4 from '../assets/images/png/img4.png';
import Img5 from '../assets/images/png/img5.png';
import Img6 from '../assets/images/png/img6.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallary = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div id='VENUE'>
            <div className='lg:flex hidden flex-row flex-wrap gap-[7px] justify-between'>
                <div className='w-[20%]'>
                    <img src={Img1} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
                <div className='w-[22%] flex flex-col gap-[8px]'>
                    <img src={Img2} alt="img1" className='w-full h-full object-cover object-center' />
                    <img src={Img3} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
                <div className='w-[31.4%]'>
                    <img src={Img4} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
                <div className='w-[24.5%] flex flex-col gap-[8px]'>
                    <img src={Img5} alt="img1" className='w-full h-full object-cover object-center' />
                    <img src={Img6} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
            </div>
            <div className='container mx-auto max-lg:block hidden px-[23.56px] pt-[39px]'>
                <Slider {...settings}>
                    <div>
                        <img src={Img1} alt="img1" className='w-full object-cover object-center md:h-[400px] md:min-h-[400px] min-h-[245px] h-[245px] ' />
                    </div>
                    <div>
                        <img src={Img2} alt="img1" className='w-full object-cover object-center md:h-[400px] md:min-h-[400px] min-h-[245px]  h-[245px] ' />
                    </div>
                    <div>
                        <img src={Img3} alt="img1" className='w-full object-cover object-center md:h-[400px] md:min-h-[400px] min-h-[245px]  h-[245px] ' />
                    </div>
                    <div>
                        <img src={Img4} alt="img1" className='w-full object-cover object-center md:h-[400px] md:min-h-[400px] min-h-[245px]  h-[245px] ' />
                    </div>
                    <div>
                        <img src={Img5} alt="img1" className='w-full object-cover object-center md:h-[400px] md:min-h-[400px] min-h-[245px]  h-[245px]' />
                    </div>
                    <div>
                        <img src={Img6} alt="img1" className='w-full object-cover object-center md:h-[400px] md:min-h-[400px] min-h-[245px]  h-[245px]' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Gallary