import React from 'react';
import { useEffect, useState } from 'react';
import { ContactMeButton } from '../buttons/ContactMe';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import CursorBlinker from '../animation/cursorBlinker';

function Top({ projectsRef, contactRef }) {
  const baseTexts = [
    'Welcome to my Portfolio',
    'Hi I’m',
    'Nipuna Deshan',
    'Full Stack Developer',
    'I think curiosity is the cart to knowledge, and friendship makes the journey easier, turning it into a shared adventure.',
  ];
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = baseTexts.map((text) =>
    useTransform(rounded, (latest) => text.slice(0, latest))
  );
  

  useEffect(() => {
    const controls = animate(count, Math.max(...baseTexts.map(text => text.length)),{
      type: 'tween', // Not really needed because adding a duration will force "tween"
      duration: 10,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, []);

  return (
    <div
      id='top'
      className='bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] pt-24 pb-12'
    >
      <div className='flex flex-row items-center justify-center m-auto gap-16 p-8 lg:p-0'>
        <div>
          <div>
            <motion.p className='font-poppins lg:text-2xl font-semibold text-xl'>
              {displayText[0]}
            </motion.p>

            <motion.p className='font-poppins font-bold mt-5 text-4xl lg:text-5xl'>
              {displayText[1]}
            </motion.p>
            <motion.p className='font-poppins font-bold text-[#0E4DA4] mt-3.5 text-4xl lg:text-6xl '>
              {displayText[2]}
            </motion.p>
            <motion.p className='font-poppins font-bold mt-3 text-3xl lg:text-5xl'>
              {displayText[3]}
            </motion.p>
            <motion.p className='font-normal font-poppins mt-6 text-base lg:text-lg'>
              {displayText[4]}
            </motion.p>
            <CursorBlinker />
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
