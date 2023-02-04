const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, '/src/**/*.{ts,tsx,js,jsx}'),
    // path.join(__dirname, '../../libs/shared-react-native/**/*.{ts,tsx,js,jsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
