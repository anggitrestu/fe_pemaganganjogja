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
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
      NEXT_PUBLIC_API_HACKLAB: process.env.NEXT_PUBLIC_API_HACKLAB,
      NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    },
  }
);
