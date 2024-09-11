const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    tab: {
      defaultProps: {
        className: '',
        activeClassName: '',
        disabled: false,
      },
      styles: {
        base: {
          tab: {
            initial: {
              display: 'flex',
              alignItems: 'items-center',
              justifyContent: 'justify-center',
              textAlign: 'text-center',
              width: 'w-full',
              height: 'h-full',
              position: 'relative',
              bg: 'bg-blue-400',
              py: 'py-1',
              px: 'px-2',
              color: 'text-red-900',
              fontSmoothing: 'antialiased',
              fontFamily: 'font-sans',
              fontSize: 'text-base',
              fontWeight: 'font-normal',
              lineHeight: 'leading-relaxed',
              userSelect: 'select-none',
              cursor: 'cursor-pointer',
            },
            disabled: {
              opacity: 'opacity-50',
              cursor: 'cursor-not-allowed',
              pointerEvents: 'pointer-events-none',
              userSelect: 'select-none',
            },
          },
          indicator: {
            position: 'absolute',
            inset: 'inset-0',
            zIndex: 'z-10',
            height: 'h-full',
            bg: 'bg-white',
            borderRadius: 'rounded-md',
            boxShadow: 'shadow',
          },
        },
      },
    },
  },
  plugins: [],
});
