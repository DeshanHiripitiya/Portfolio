import React from 'react';
import { ContactMeButton } from '../buttons/ContactMe';

function Top() {
  return (
    <div
      id='top'
      className='bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] pt-24 pb-12'
    >
      <div className='flex flex-row items-center justify-center m-auto gap-16'>
        <div>
          <div>
            <p className='font-poppins text-2xl font-semibold'>
              Welcome to my Portfolio
            </p>

            <p className='font-poppins text-5xl font-bold mt-5'>Hi I’m</p>
            <p className='font-poppins text-6xl font-bold text-[#0E4DA4] mt-3.5'>
              Nipuna Deshan
            </p>
            <p className='font-poppins text-5xl font-bold mt-3'>
              Full Stack Developer
            </p>
            <p className='font-normal font-poppins text-lg mt-6'>
              I think curiosity is the cart to knowledge, and friendship<br /> makes
              the journey easier, turning it into a shared adventure.
              {/* Driven by collaboration and growth, I innovate, adapt,
              <br /> and aim to make a positive impact. */}
            </p>
          </div>
          <div className='mt-16'>
            <ContactMeButton />
          </div>
        </div>
        <div className='flex items-center'>
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
