module.exports = (api) => {
  api.env();

  return {
    presets: [
      ['@babel/preset-env', {
          targets: {
            // electron: 'electron/package.json'.version,
          },
          corejs: 3,
          useBuiltIns: 'usage',
      }],
    ],
    plugins: [
      ['@babel/plugin-syntax-dynamic-import'],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  };
};
