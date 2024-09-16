import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Smsui() {
  return (
    <Card className='mt-6 w-96 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../../assests/sms_project.png')}
          alt='sms project icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2 cursor-pointer hover:text-blue-800'
          as='a'
          href='https://www.figma.com/design/swpprJciaLed2OZbeRi21Z/SMS-(studio-side)?node-id=143-114&node-type=frame&t=1jvxnEhim1bfqazp-0'
          target='_blank' // Opens the link in a new tab
          rel='noopener noreferrer' // Security improvement for external links
        >
          Studio Managment System
        </Typography>
        <Typography className='font-poppins'>
          As part of a second-year software project, I contributed to designing
          the user interface for a Studio Management System. Our group aimed for
          a sleek, user-friendly experience.
          <br />
          <br />
          <span className='font-bold'>Tools :</span> Figma
        </Typography>
      </CardBody>
      {/* <CardFooter className='pt-0'>
        <Button className='font-poppins'>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
