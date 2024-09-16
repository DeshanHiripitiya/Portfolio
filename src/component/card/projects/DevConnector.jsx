import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function DevConnector() {
  return (
    <Card className='mt-6 w-96 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../assests/devconnector.png')}
          alt='devconnector project icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2 cursor-pointer hover:text-blue-800'
          as='a'
          href='https://github.com/DeshanHiripitiya/DevConnector' // GitHub link
          target='_blank' // Opens the link in a new tab
          rel='noopener noreferrer' // Security improvement for external links
        >
          DevConnector
        </Typography>
        <Typography className='font-poppins'>
          This is a question-and-answer website for developers, facilitating
          knowledge sharing and community engagement, enhancing collaborative
          problem-solving and learning.
          <br />
          <br />
          <span className='font-bold'>Technologies :</span> Reactjs, Nodejs,
          Expressjs, MongoDB
        </Typography>
      </CardBody>
      {/* <CardFooter className='pt-0'>
        <Button className='font-poppins'>Read More</Button>
      </CardFooter> */}
    </Card>
  );
}
