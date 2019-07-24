const css = require('../loaders/css-loader');
const style = require('../loaders/style-loader');

module.exports = () => {
  return [
    {
      test: /\.s?(a|c)?ss$/,
      use: [
        style(),
        css({
          importLoaders: 0,
        }),
      ],
    },
  ];
};
