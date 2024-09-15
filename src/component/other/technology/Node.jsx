import React from 'react';

function Node() {
  return (
    <div className='flex items-center justify-center bg-black h-24 w-24 rounded-full'>
      <img
        src={require('../../../assests/node.png')}
        alt='html'
        className='h-10'
      />
    </div>
  );
}

export default Node
