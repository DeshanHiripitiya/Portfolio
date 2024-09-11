import React from 'react';
import { ProjectTabs } from '../other/Tabs'

function Projects() {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center my-28 font-poppins'>
        <div className='text-xl font-semibold text-[#0E4DA4]'>
          MY PROJECTS
        </div>
        <div className='text-5xl font-bold text-[#222222] mt-12'>
          Presenting My Projects and Case Studies
        </div>
        <div className='mt-14'>
          <ProjectTabs />
        </div>
        <div className=''></div>
      </div>
    </div>
  );
}

export default Projects;
