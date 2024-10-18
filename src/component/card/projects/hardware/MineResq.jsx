import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Hardware() {
  return (
    <Card className='mt-6 w-96 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../../assests/hardware_project.png')}
          alt='devconnector project icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2'
        >
          DevConnector
        </Typography>
        <Typography className='font-poppins'>
          An innovative machine that recycles face masks into clean, dry plastic
          using a heating chamber and smart screw mechanism, offering seamless
          mold production with real-time updates via LCD.
          <br />
          <br />
          {/* <span className='font-bold'>Technologies :</span> Reactjs, Nodejs,
          Expressjs, MongoDB */}
        </Typography>
      </CardBody>
      {/* <CardFooter className='pt-0'>
        <Button className='font-poppins'>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
