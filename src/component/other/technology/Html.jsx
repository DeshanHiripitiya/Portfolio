import React from 'react';

function Html() {
  return (
    <div className='flex items-center justify-center bg-black h-24 w-24 rounded-full'>
      <img
        src={require('../../../assests/html.png')}
        alt='html'
        className='h-12'
      />
    </div>
  );
}

export default Html
