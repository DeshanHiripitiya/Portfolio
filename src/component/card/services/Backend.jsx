import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Backend() {
  return (
    <Card className='mt-6 w-80 h-[330px]'>
      <CardBody className='p-10 text-center'>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2'
        >
          Backend Development
        </Typography>
        <Typography className='font-poppins'>
          Backend development involves building server-side logic, managing
          databases, and ensuring secure data processing, storage, and smooth
          communication with front-end systems.
        </Typography>
      </CardBody>
    </Card>
  );
}
