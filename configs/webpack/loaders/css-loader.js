module.exports = ({ importLoaders = 2, ...props }) => {
  return {
    loader: 'css-loader',
    options: {
      ...props,
      importLoaders,
      modules: {
        mode: 'global',
      },
    },
  };
}
