import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 80; // Adjust based on your navbar's height

    if (section) {
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {[
        { name: 'Home', id: 'top' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Services', id: 'services' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' },
      ].map((item) => (
        <Typography
          key={item.name}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-medium font-poppins text-base font-semibold'
        >
          <a
            href={`#${item.id}`}
            className={`flex items-center hover:text-[#0E4DA4] transition-colors`}
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor behavior
              handleSmoothScroll(item.id); // Call smooth scroll function
            }}
            data-section={item.id}
          >
            {item.name}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export function NavbarSimple() {

  const scrollToTop = () => {
    const topSection = document.getElementById('top'); // Reference the top section by its ID
    if (topSection) {
      topSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            className='h-12 cursor-pointer'
            onClick={scrollToTop}
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
        <div className='flex flex-row gap-5'>
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
      </div>
      {/* Mobile Menu */}
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
