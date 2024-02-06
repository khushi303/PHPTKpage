import './App.css';
import Header from './components/Header';
import Chicago from './components/Chicago';
import Conference from './components/Conference';
import About from './components/About';
import Footer from './components/Footer';
import Sponsor from './components/Sponsor';
import Gallary from './components/Gallary';
import React, { useState, useEffect } from 'react';
import BackToTop from './assets/images/png/topto.png';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });
  // -----------pre-loader-----------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <div className='overflow-hidden'>
      {
        screenLoading ? (
          <>
            <div className='fixed min-h-screen bg-[#e8eef5] top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
              <div className='max-w-[150px] w-full'>
                <Loader />
              </div>

            </div>

          </>

        ) : (
          <div>
            <Header />
            <Chicago />
            <Conference />
            <Sponsor />
            <About />
            <Gallary />
            <Footer />
            <div className='fixed bottom-4 right-4 z-20 cursor-pointer'>
              <div className={`${backToTop ? '' : 'hidden'} rounded-[13.8px] border border-solid border-white bottom-[4%] right-[2%] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] cursor-pointer animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center`} onClick={() => top()}>
                <img src={BackToTop} alt="Backtotop" className='w-full rounded-[13.1px]' />
              </div>
            </div>
          </div>
        )
      }</div>
  );
}

export default App;
