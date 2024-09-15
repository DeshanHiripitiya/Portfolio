import React from 'react';
import { ProjectTabs } from '../other/Tabs'

function Projects() {
  return (
    <div id='projects' className='py-12 mt-36'>
      <div className='flex flex-col items-center justify-center font-poppins'>
        <div className='text-xl font-semibold text-[#0E4DA4]'>MY PROJECTS</div>
        <div className='text-4xl font-bold text-[#222222] mt-12'>
          Presenting My Projects and Case Studies
        </div>
        <div className='mt-14'>
          <ProjectTabs />
        </div>
      </div>
    </div>
  );
}

export default Projects;
