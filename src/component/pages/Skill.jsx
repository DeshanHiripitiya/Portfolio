import React from 'react'
import Technologies from '../other/Technologies';

function Skill() {
  return (
    <div className='py-12 mt-36 '>
      <div className='flex flex-col items-center justify-center font-poppins'>
        <p className='text-xl font-semibold text-[#0E4DA4] uppercase'>
          what i know
        </p>
        <p className='text-4xl font-bold text-[#222222] mt-12'>My Skills</p>
        <p className='mt-3 mx-auto max-w-3xl text-center !text-gray-500'>
          Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
          dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
          integre suavitate per an, alienum phaedrum te sea. Ex sea causae
          dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
          postulant. Ut sed affert audire.
        </p>
        <div>
          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default Skill
