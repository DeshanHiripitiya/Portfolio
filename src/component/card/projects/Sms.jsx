import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Sms() {

  return (
    <Card className='mt-6 w-96 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../assests/sms_project.png')}
          alt='sms project icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2 cursor-pointer hover:text-blue-800'
          as='a'
          href='https://github.com/codefusionuom' // GitHub link
          target='_blank' // Opens the link in a new tab
          rel='noopener noreferrer' // Security improvement for external links
        >
          Studio Managment System
        </Typography>
        <Typography className='font-poppins'>
          Second-year software project managing studio interworks. I developed
          superadmin functionalities, handling both back end and front end.
          <br />
          <br />
          <span className='font-bold'>Technologies :</span> Reactjs, Tailwind
          CSS, Nodejs, Expressjs, Sequalize, mssql
        </Typography>
      </CardBody>
      {/* <CardFooter className='pt-0'>
        <Button className='font-poppins'>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
