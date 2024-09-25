import React from 'react';
import { Frontend } from '../card/services/Frontend';
import { Backend } from '../card/services/Backend';
import { Database } from '../card/services/Database';
import { Design } from '../card/services/Design';

function Services() {
  return (
    <div
      id='services'
      className='bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] py-12 mt-36'
    >
      <div className='flex flex-col items-center justify-center font-poppins'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-xl font-semibold text-[#0E4DA4]'>WHAT I PROVIDE</p>
          <p className='text-4xl font-bold text-[#222222] mt-12'>My Services</p>
        </div>
        <div
          className='flex flex-col space-y-4 mt-14 
md:grid md:grid-cols-2 md:gap-6 md:space-y-0 
lg:flex-row lg:space-x-6
items-center justify-center'
        >
          <div>
            <Design />
          </div>
          <div>
            <Frontend />
          </div>
          <div>
            <Backend />
          </div>
          <div>
            <Database />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
