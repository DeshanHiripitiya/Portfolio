import React from 'react'

function AboutMe() {
    
  return (
    <div id='about' className='py-12 mt-36'>
      <div className='flex flex-col items-center justify-center'>
        <div className='font-poppins text-4xl font-semibold text-[#010035] '>
          A Little Bit About Me
        </div>
        <div
          className='font-poppins text-xl font-normal mt-12 text-justify mx-10
        lg:mx-96'
        >
          With a passion for discovery and collaboration, I approach every
          project with dedication. My background at the University of Moratuwa’s
          Faculty of Information Technology has equipped me with a diverse skill
          set, including both frontend and backend technologies. Whether
          tackling complex challenges or exploring new opportunities, I am
          committed to continuous learning and growth.
          <br />
          <br />I also enjoy sharing my knowledge to help others develop their
          skills. My goal is to contribute effectively to dynamic teams and make
          meaningful strides in my field, turning every project into an
          innovation and success.
        </div>
        <div className='hidden md:block mt-14 pl-80'>
          <img
            src={require('../../assests/signature 1.png')}
            alt='sig1'
            className='h-10'
          />
          <img
            src={require('../../assests/signature 2.2.png')}
            alt='sig2'
            className='pl-28 h-8'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe
