import React from 'react'

function AboutMe() {
    
  return (
    <div className='py-12 mt-36'>
      <div className='flex flex-col items-center justify-center'>
        <div className='font-poppins text-4xl font-semibold text-[#010035] '>
          A Little Bit About Me
        </div>
        <div className='font-poppins text-xl font-normal mx-96 mt-12 text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ipsum, scelerisque proin consequat tristique tortor, amet nullam. Eu
          purus blandit luctus faucibus justo venenatis a. Auctor vitae sed arcu
          curabitur tincidunt nibh. Lacinia ornare magnis amet blandit nisl urna
          tincidunt eget. Urna sed etiam auctor ut netus sed sed. Gravida
          habitant eu gravida id neque, facilisis.
          <br />
          <br />
          Neque lectus elit massa aenean turpis quam aliquet.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Quisque ipsum, scelerisque
          proin consequat tristique tortor, amet nullam. Eu purus blandit luctus
          faucibus justo venenatis a.{' '}
        </div>
        <div className='mt-14 pl-80'>
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
