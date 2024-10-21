import { motion } from 'framer-motion';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className='inline h-[1rem] w-[10px] translate-y-1 bg-slate-900 z-10'
    />
  );
}
