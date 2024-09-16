import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Portfolio() {
  return (
    <Card className='mt-6 w-96 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../assests/portfolio.png')}
          alt='portfolio icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2 cursor-pointer hover:text-blue-800'
          as='a'
          href='https://github.com/DeshanHiripitiya/Portfolio' // GitHub link
          target='_blank' // Opens the link in a new tab
          rel='noopener noreferrer' // Security improvement for external links
        >
          Portfolio
        </Typography>
        <Typography className='font-poppins'>
          Developed a user-friendly portfolio website with intuitive design,
          allowing direct contact via WhatsApp or email for seamless
          communication and engagement.
          <br />
          <br />
          <span className='font-bold'>Technologies :</span> Reactjs, Emailjs
        </Typography>
      </CardBody>
      {/* <CardFooter className='pt-0'>
        <Button className='font-poppins'>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
