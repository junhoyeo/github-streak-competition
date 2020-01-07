const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

module.exports = withSass(
  withCSS({
  }),
);
