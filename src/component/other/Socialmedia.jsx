import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

function Socialmedia() {
  return (
    <div className='flex flex-row gap-5 justify-center align-center'>
      <a
        href='https://www.instagram.com/nipuna__deshan/'
        // as='a' //behave as a hyperlink
        target='_blank' // Opens the link in a new tab
        rel='noopener noreferrer' // Ensures security when opening new tabs
        className='opacity-60 transition-opacity hover:opacity-100 cursor-pointer'
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size='lg'
          style={{
            color: '#000000',
            // borderRadius: '50%',
            // border: '2px solid #000000',
            // padding: '5px',
          }}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/nipuna-deshan-113a10285/'
        as='a' //behave as a hyperlink
        target='_blank' // Opens the link in a new tab
        rel='noopener noreferrer' // Ensures security when opening new tabs
        className='opacity-50 transition-opacity hover:opacity-100 cursor-pointer'
      >
        {/* <FontAwesomeIcon
              icon={faLinkedin}
              size='lg'
              style={{ color: '#000000' }}
            /> */}
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size='lg'
          style={{ color: '#000000' }}
        />
      </a>
      <a
        as='a'
        href='https://wa.me/+94776552898'
        target='_blank'
        rel='noopener noreferrer'
        className='opacity-60 transition-opacity hover:opacity-100 cursor-pointer'
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          size='lg'
          style={{ color: '#000000' }}
        />
      </a>
    </div>
  );
}

export default Socialmedia
