const CopyPlugin = require('copy-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new CopyPlugin({
      patterns: [
        {
          from: options.public,
          to: options.dest,
          globOptions: {
            dot: true,
            ignore: ['.gitkeep', '.DS_Store', 'index.html'],
          },
        },
      ],
    }),
  ]
}
