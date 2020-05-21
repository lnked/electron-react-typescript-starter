const svg = require('../loaders/svg-loader');
const url = require('../loaders/url-loader');
const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');
const imageWebpack = require('../loaders/image-webpack-loader');

const { staticName } = require('../options');

module.exports = () => {
  return [
    {
      test: /\.(jpe?g|png|gif|svg|ico)(\?\S*)?$/i,
      use: [
        cache(),
        file({
          outputPath: `${staticName}/assets/`,
        }),
        imageWebpack(),
      ],
    },
    {
      test: /\.svg$/,
      use: [
        ...svg(),
      ],
    },
  ];
};
