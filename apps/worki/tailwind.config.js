const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, '/src/**/*.{ts,tsx,js,jsx}'),
    // path.join(__dirname, '../../libs/shared-react-native/**/*.{ts,tsx,js,jsx}'),
  ],
  theme: {
    extend: {},

    fontSize: {
      // default values
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],

      // default values except i changed the line height from '1' to whatever the font size is
      // https://github.com/vadimdemedes/tailwind-rn/issues/88#issuecomment-979433253
      // In React Native, the only units available are px, dp and %
      '5xl': ['3rem', { lineHeight: '3rem' }],
      '6xl': ['3.75rem', { lineHeight: '3.75rem' }],
      '7xl': ['4.5rem', { lineHeight: '4.5rem' }],
      '8xl': ['6rem', { lineHeight: '6rem' }],
      '9xl': ['8rem', { lineHeight: '8rem' }],
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
