import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Design() {
  return (
    <Card className='mt-6 w-[20rem] h-[330px]'>
      <CardBody className='p-10 text-center'>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2'
        >
          Web Design
        </Typography>
        <Typography className='font-poppins'>
          Web design focuses on crafting visually appealing, user-centered
          layouts, enhancing usability, navigation, and overall user experience
          through thoughtful interface design.
        </Typography>
      </CardBody>
    </Card>
  );
}
