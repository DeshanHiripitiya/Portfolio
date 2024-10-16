import React from 'react';
import { ContactMeButton } from '../buttons/ContactMe';
import { motion } from 'framer-motion';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function Top({ projectsRef, contactRef }) {
  return (
    <div
      id='top'
      className='bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] pt-24 pb-12'
    >
      <div className='flex flex-row items-center justify-center m-auto gap-16 p-8 lg:p-0'>
        <div>
          <div>
            <motion.div
              variants={cursorVariants}
              animate='blinking'
              className='inline-block h-5 w-[1px] translate-y-1 bg-slate-900'
            />
            <p className='font-poppins lg:text-2xl font-semibold text-xl'>
              Welcome to my Portfolio
            </p>

            <p className='font-poppins font-bold mt-5 text-4xl lg:text-5xl'>
              Hi I’m
            </p>
            <p className='font-poppins font-bold text-[#0E4DA4] mt-3.5 text-4xl lg:text-6xl '>
              Nipuna Deshan
            </p>
            <p className='font-poppins font-bold mt-3 text-3xl lg:text-5xl'>
              Full Stack Developer
            </p>
            <p className='font-normal font-poppins mt-6 text-base lg:text-lg'>
              I think curiosity is the cart to knowledge, and friendship
              <br /> makes the journey easier, turning it into a shared
              adventure.
            </p>
          </div>
          <div className='mt-6 lg:mt-16'>
            <ContactMeButton
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
          </div>
        </div>
        <div className='hidden md:block lg:block flex items-center'>
          <img
            src={require('../../assests/my_photo.png')}
            alt='Logo'
            className='h-1/4'
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
