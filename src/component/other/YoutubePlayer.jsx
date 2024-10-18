import React from 'react';

export function YouTubeVideo({ videoId, onClose }) {
  return (
    <div className='relative'>
      {/* Close button */}
      <button className='absolute top-2 right-2 text-white' onClick={onClose}>
        X
      </button>

      {/* YouTube iframe */}
      <div className='rounded-xl overflow-hidden w-[854px] h-[480px]'>
        <iframe
          width='854'
          height='480'
          src={`https://www.youtube.com/embed/${videoId}`}
          // src={`https://youtu.be/${videoId}`}
          // https:title='YouTube video player' //youtu.be/7vRhmxn8r54?si=25nainMMf_3jovSd
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
