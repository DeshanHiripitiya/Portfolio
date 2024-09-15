import { Card, CardBody, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Contactinfo() {
  return (
    <Card className='w-full h-full lg:max-h-[510px] bg-gradient-to-r from-[rgba(255,245,0,0.08)0%] to-[rgba(111,244,75,0.15)100%]'>
      <CardBody className='p-14'>
        <Typography variant='h5' color='black' className='font-poppins mb-8'>
          Contact Details
        </Typography>
        <div className='space-y-5'>
          {/* Phone */}
          <div className='flex items-center'>
            <span className='min-w-[30px]'>
              <FontAwesomeIcon
                icon={faPhone}
                size='lg'
                style={{ color: '#000000' }}
              />
            </span>
            <span className='ml-4 text-black'>(+94) 776552898</span>
          </div>

          {/* Email */}
          <div className='flex items-center'>
            <span className='min-w-[30px]'>
              <FontAwesomeIcon
                icon={faEnvelope}
                size='lg'
                style={{ color: '#000000' }}
              />
            </span>
            <span className='ml-4 text-black'>nipunadeshahp@gmail.com</span>
          </div>

          {/* Address */}
          <div className='flex items-center'>
            <span className='min-w-[30px]'>
              <FontAwesomeIcon
                icon={faHouse}
                size='lg'
                style={{ color: '#000000' }}
              />
            </span>
            <span className='ml-4 text-black'>Katubedda, Moratuwa</span>
          </div>

          {/* GitHub */}
          <div className='flex items-center'>
            <span className='min-w-[30px]'>
              <FontAwesomeIcon
                icon={faGithub}
                size='lg'
                style={{ color: '#000000' }}
              />
            </span>
            <a
              href='https://github.com/DeshanHiripitiya'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-4 text-black hover:underline'
            >
              GitHub Profile
            </a>
          </div>

          {/* LinkedIn */}
          <div className='flex items-center'>
            <span className='min-w-[30px]'>
              <FontAwesomeIcon
                icon={faLinkedin}
                size='lg'
                style={{ color: '#000000' }}
              />
            </span>
            <a
              href='https://www.linkedin.com/in/nipuna-deshan-113a10285/'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-4 text-black hover:underline'
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
