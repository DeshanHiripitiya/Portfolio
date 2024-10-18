import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Modal from 'react-modal';
import { YouTubeVideo } from '../../../other/YoutubePlayer';

export function Hardware() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
     document.body.style.overflow = 'hidden';
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalIsOpen(false);
  };

  return (
    <Card className='mt-6 w-96 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../../assests/hardware_project.png')}
          alt='Hardware project icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2'
        >
          Automated Face Mask Recycling Machine
        </Typography>
        <Typography className='font-poppins'>
          An innovative machine that recycles face masks into clean, dry plastic
          using a heating chamber and smart screw mechanism, offering seamless
          mold production with real-time updates via LCD.
          {/* <span className='font-bold'>Technologies :</span> Reactjs, Nodejs,
          Expressjs, MongoDB */}
        </Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button
          className='font-poppins bg-[#0E4DA4] mx-2 px-8'
          onClick={openModal}
        >
          Demo
        </Button>

        {/* Modal with YouTube video */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          style={{
            content: {
              padding: 0,
              borderRadius: '0px',
              zIndex: 1000, // Higher z-index to bring it above other elements
            },
            overlay: {
              zIndex: 999, // Higher z-index for overlay
            },
          }}
          ariaHideApp={false}
          onClick={(e) => {
            // Close modal if clicked outside the modal content
            if (e.target.className.includes('ReactModal__Overlay')) {
              closeModal();
            }
          }}
        >
          <div
            className='rounded-xl overflow-hidden w-[854px] h-[480px] bg-black'
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            <YouTubeVideo
              videoId='7vRhmxn8r54?si=25nainMMf_3jovSd'
              onClose={closeModal}
            />
          </div>
        </Modal>
      </CardFooter>
    </Card>
  );
}
