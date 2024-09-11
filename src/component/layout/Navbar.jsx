import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {['Home', 'About', 'Portfolio', 'Blog', 'Contact'].map((item) => (
        <Typography
          key={item}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium font-poppins text-lg font-semibold'
        >
          <a
            href='#'
            className='flex items-center hover:text-[#0E4DA4] transition-colors'
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className='fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-3xl px-40 py-4 bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] rounded-t-none rounded-b-none border-0'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src={require('../../assests/logo.png')}
            alt='Logo'
            className='h-14'
          />
        </div>
        {/* Nav Links */}
        <div className='hidden lg:block'>
          <NavList />
        </div>
        {/* Mobile Menu Icon */}
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
        <div className='flex flex-row gap-3'>
          <div>
            <FontAwesomeIcon
              icon={faInstagram}
              size='xl'
              style={{
                color: '#000000',
                borderRadius: '50%',
                border: '2px solid #000000',
                padding: '4px',
              }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size='xl'
              style={{
                color: '#000000',
                borderRadius: '50%',
                border: '2px solid #000000',
                padding: '4px',
              }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              size='xl'
              style={{
                color: '#000000',
                borderRadius: '50%',
                border: '2px solid #000000',
                padding: '4px',
              }}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
