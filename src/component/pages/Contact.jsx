import React from 'react'

function Contact() {
  return (
    <div className='py-12 mt-36 bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] '>
      <div className='flex flex-col items-center justify-center font-poppins'>
        <div className='text-xl font-semibold text-[#0E4DA4] uppercase'>
          contact me
        </div>
        <div className='text-4xl font-bold text-[#222222] mt-12'>
          Have a Project Idea ? Let’s Talk
        </div>
        <div className='mt-14'>{/* <ProjectTabs /> */}</div>
      </div>
    </div>
  );
}

export default Contact
