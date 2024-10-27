import React from 'react'

function AboutMe() {
    
  return (
    <div id='about' className='py-12 mt-16
    lg:mt-28
    '>
      <div className='flex flex-col items-center justify-center'>
        <div
          className='font-poppins font-semibold text-[#010035] 
          text-2xl
        md:text-3xl
        lg:text-4xl'
        >
          A Little Bit About Me
        </div>
        <div
          className='font-poppins font-normal mt-10 text-justify text-sm mx-10 
          md:mx-24
        lg:mx-30 lg:mt-14 md:text-xl
        xl:mx-52'
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
        <div
          className='mt-[2rem] 
        pl-[5rem]'
        >
          <img
            src={require('../../assests/signature 1.png')}
            alt='sig1'
            className='h-6 
            sm:h-7
            md:h-10'
          />
          <img
            src={require('../../assests/signature 2.2.png')}
            alt='sig2'
            className='pl-[4rem] md:pl-[6rem] h-4
            sm:h-5
            md:h-8'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe
