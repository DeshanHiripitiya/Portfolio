import React from 'react';
import {
  motion,
  useAnimationControls,
} from 'framer-motion';
import { ContactMeButton } from '../buttons/ContactMe';

function Top({ projectsRef, contactRef }) {

  const TypewriterText = ({ text, delay = 0 }) => {
    const controls = useAnimationControls();

    React.useEffect(() => {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.1 + delay },
      }));
    }, [controls, delay]);

    return (
      <span style={{ display: 'inline-block' }}>
        {text.split('').map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            custom={i}
            animate={controls}
            initial={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div
      id='top'
      className='bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] pt-24 pb-12'
    >
      <div className='flex flex-row items-center justify-center m-auto gap-16 p-8 lg:p-0'>
        <div>
          <div>
            <p className='font-poppins lg:text-2xl font-semibold text-xl'>
              <TypewriterText text='Welcome to my Portfolio' />
            </p>

            <p className='font-poppins font-bold mt-5 text-4xl lg:text-5xl'>
              <TypewriterText text='Hi I’m' delay={2.4} />
            </p>

            <p className='font-poppins font-bold text-[#0E4DA4] mt-3.5 text-4xl lg:text-6xl'>
              <TypewriterText text='Nipuna Deshan' delay={3.1} />
            </p>

            <p className='font-poppins font-bold mt-3 text-3xl lg:text-5xl'>
              <TypewriterText text='Full Stack Developer' delay={4.5} />
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 6 }}
              className='font-normal font-poppins mt-6 text-base text-center lg:text-lg '
            >
              I think curiosity is the cart to knowledge, and friendship
              <span className='hidden md:inline lg:inline'>
                <br />
              </span>
              makes the journey easier, turning it into a shared adventure.
            </motion.p>
          </div>
          <div className='mt-6 lg:mt-16'>
            <ContactMeButton
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
          </div>
        </div>
        <div className='hidden md:block flex items-center'>
          <img
            src={require('../../assests/my_photo.png')}
            alt='Logo'
            className='h-1/4'
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
