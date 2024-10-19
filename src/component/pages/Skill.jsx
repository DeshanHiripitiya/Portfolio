import React from 'react'
import Technologies from '../other/Technologies';

function Skill() {
  return (
    <div id='skills' className='py-12 mt-36'>
      <div className='flex flex-col items-center justify-center font-poppins'>
        <p className='text-base md:text-xl font-semibold text-[#0E4DA4] uppercase'>
          what i know
        </p>
        <p className='text-2xl
        md:text-3xl
        lg:text-4xl font-bold text-[#222222] mt-12'>My Skills</p>
        <p className='mt-3 mx-auto max-w-3xl text-center !text-gray-500 '>
          <span className='italic'>
            "The more I learn, the more I realize how much I don't know. And
            when I think I know something, I learn something else and realize I
            was wrong."{' '}
          </span>
          - Unknown
        </p>
        <div>
          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default Skill
