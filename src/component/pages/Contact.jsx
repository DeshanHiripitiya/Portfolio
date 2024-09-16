import React, { useRef, useState } from 'react';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import { Contactinfo } from '../card/Contactinfo';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [success, setSuccess] = useState(false); // State for success message

  emailjs.init('yuEmGHzEZ-wFJYmYB');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_y7qoxk8', 'template_x9eojau', form.current).then(
      () => {
        console.log('SUCCESS!');
        form.current.reset();
        setSuccess(true);

        // Keep success state for 3 seconds, then reset it
        setTimeout(() => {
          setSuccess(false);
        }, 3000);

      },
      (error) => {
        console.log('FAILED...', error);
      }
    ).finally(() => {
        setLoading(false); // Stop loading spinner;
    })
  };

  return (
    <section
      id='contact'
      className='px-8 py-8 lg:py-16 bg-gradient-to-r from-[rgba(255,245,0,0.1)0%] via-[rgba(111,244,75,0.1)68%] to-[rgba(0,255,133,0.1)100%] py-12 mt-36'
    >
      <div className='container mx-auto text-center font-poppins'>
        <Typography className='text-xl font-semibold text-[#0E4DA4] uppercase'>
          contact me
        </Typography>
        <Typography
          variant='h1'
          color='blue-gray'
          className='text-4xl font-bold text-[#222222] mt-12'
        >
          Have a Project Idea ? Let’s Talk
        </Typography>
        <Typography className='lg:mb-20 mx-auto max-w-3xl !text-gray-500 mt-3'>
          I’m always open to feedback! Whether you have questions about me or
          suggestions for improvement, I’m eager to hear from you and improve
          further.
        </Typography>
        <div className='grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start'>
          {/* <img
            src='/image/map.svg'
            alt='map'
            className='w-full h-full lg:max-h-[510px]'
          /> */}
          <Contactinfo />
          <form
            ref={form}
            className='flex flex-col gap-4 lg:max-w-sm'
            onSubmit={sendEmail}
          >
            {/* <Typography
              variant='small'
              className='text-left !font-semibold !text-gray-600'
            >
              Contact Me
            </Typography> */}
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Typography
                  variant='small'
                  className='mb-2 text-left font-medium !text-gray-900'
                >
                  First Name
                </Typography>
                <Input
                  color='gray'
                  size='lg'
                  placeholder='First Name'
                  name='first_name'
                  className='focus:border-t-gray-900'
                  containerProps={{
                    className: '!min-w-full',
                  }}
                  labelProps={{
                    className: 'hidden',
                  }}
                />
              </div>
              <div>
                <Typography
                  variant='small'
                  className='mb-2 text-left font-medium !text-gray-900'
                >
                  Last Name
                </Typography>
                <Input
                  color='gray'
                  size='lg'
                  placeholder='Last Name'
                  name='last_name'
                  className='focus:border-t-gray-900'
                  containerProps={{
                    className: '!min-w-full',
                  }}
                  labelProps={{
                    className: 'hidden',
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant='small'
                className='mb-2 text-left font-medium !text-gray-900'
              >
                Your Email
              </Typography>
              <Input
                color='gray'
                size='lg'
                placeholder='name@email.com'
                name='user_email'
                className='focus:border-t-gray-900'
                containerProps={{
                  className: '!min-w-full',
                }}
                labelProps={{
                  className: 'hidden',
                }}
              />
            </div>
            <div>
              <Typography
                variant='small'
                className='mb-2 text-left font-medium !text-gray-900'
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color='gray'
                placeholder='Message'
                name='message'
                className='focus:border-t-gray-900'
                containerProps={{
                  className: '!min-w-full',
                }}
                labelProps={{
                  className: 'hidden',
                }}
              />
            </div>
            <Button
              className={`w-full ${success ? 'bg-green-500' : 'bg-[#0E4DA4]'}`}
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <span className='flex items-center justify-center'>
                  <svg
                    className='animate-spin h-5 w-5 mr-3 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : success ? (
                'Message Sent!'
              ) : (
                'Send message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
