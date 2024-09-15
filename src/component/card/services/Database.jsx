import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Database() {
  return (
    <Card className='mt-6 w-80 h-[330px]'>
      <CardBody className='p-10 text-center'>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2'
        >
          Database Management
        </Typography>
        <Typography className='font-poppins'>
          Database management involves organizing, storing, and maintaining data
          efficiently, ensuring security, integrity, and accessibility while
          supporting reliable data retrieval and updates.
        </Typography>
      </CardBody>
    </Card>
  );
}
