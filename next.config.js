const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const withImages = require('next-images');

const path = require('path');

module.exports = withPlugins(
  [
    withCss({}),
    withImages({}),
    withReactSvg({
      include: path.resolve(__dirname, './public/images'),
      webpack(config, options) {
        return config;
      },
    }),
  ],
  {
    env: {
      NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
      SERVER_API: 'https://pemaganganjogja-rw3g4.ondigitalocean.app',
      NEXT_PUBLIC_BASE_URL: 'https://pemaganganjogja-rw3g4.ondigitalocean.app',
    },
  }
);
