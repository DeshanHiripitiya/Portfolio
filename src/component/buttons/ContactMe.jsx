import { Button } from '@material-tailwind/react';

export function ContactMeButton() {

const font = 'normal-case text-lg font-poppins font-light px-10 py-2';

  return (
    <div className='flex items-center gap-8'>
      <Button
        variant='filled'
        className={`rounded-full ${font} bg-[#0E4DA4] text-white border-2 border-transparent hover:bg-transparent hover:border-[#0E4DA4] hover:text-[#0E4DA4] transition-colors duration-700`}
      >
        Contact Me
      </Button>
      <Button
        variant='outlined'
        className={`rounded-full ${font} text-[#0E4DA4] border-2 border-[#0E4DA4] hover:bg-[#0E4DA4] hover:text-white transition-colors duration-700`}
      >
        My Projects
      </Button>
    </div>
  );
}
