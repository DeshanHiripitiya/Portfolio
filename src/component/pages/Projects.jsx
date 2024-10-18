import React, { forwardRef } from 'react';
import { ProjectTabs } from '../other/Tabs';

const Projects = forwardRef((props, ref) => {
  
  return (
    <div ref={ref} id='projects' className='py-12 mt-36'>
      <div className='flex flex-col items-center justify-center font-poppins'>
        <div className='text-base md:text-xl font-semibold text-[#0E4DA4]'>MY PROJECTS</div>
        <div
          className='text-center font-bold text-[#222222] mt-12 text-2xl px-10
          md:text-3xl
        lg:text-4xl'
        >
          Presenting My Projects and Case Studies
        </div>
        <div className='mt-14'>
          <ProjectTabs />
        </div>
      </div>
    </div>
  );
})

export default Projects;
