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
    <Card className='mt-6 w-96'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../assests/sms_project.png')}
          alt='sms project icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2'
        >
          Studio Managment System
        </Typography>
        <Typography className='font-poppins'>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button className='font-poppins'>Read More</Button>
      </CardFooter>
    </Card>
  );
}
