import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function Portfolioui() {
  return (
    <Card className='mt-6 bg-gradient-to-r from-[rgba(255,245,0,0.05)0%] via-[rgba(111,244,75,0.05)68%] to-[rgba(0,255,133,0.05)100%]'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img
          src={require('../../../../assests/portfolio.png')}
          alt='portfolio icon'
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant='h5'
          color='blue-gray'
          className='font-poppins mb-2 cursor-pointer hover:text-blue-800'
          as='a'
          href='https://www.figma.com/design/vEC2vNZ4Kk7vVMH8njQbc7/myPortfolio?node-id=0-1&node-type=canvas&t=hrXJ7fKUk4bpr1LE-0'
          target='_blank' // Opens the link in a new tab
          rel='noopener noreferrer' // Security improvement for external links
        >
          Portfolio
        </Typography>
        <Typography className='font-poppins'>
          Designed a user-friendly portfolio, focusing on ease of
          development. The interface is intuitive and streamlined, facilitating
          smooth implementation and enhancing user experience.
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
