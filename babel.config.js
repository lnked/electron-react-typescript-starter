module.exports = (api) => {
  api.env()

  const development = api.env('development')

  return {
    presets: [
      ['@babel/preset-env', {
        loose: true,
        targets: {
          electron: '5.0.7',
          browsers: 'last 2 versions',
        },
        corejs: 3,
        modules: 'commonjs',
        // modules: false,
        useBuiltIns: 'usage',
        shippedProposals: true,
      }],
      ['@babel/preset-typescript'],
      ['@babel/preset-react', { development }],
      ['@emotion/babel-preset-css-prop', {
        autoLabel: true,
        labelFormat: '[local]',
        useBuiltIns: false,
        throwIfNamespace: true,
      }],
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        corejs: 3,
        helpers: false,
        regenerator: true,
      }],
      ['@babel/plugin-syntax-dynamic-import'],
      ['@babel/plugin-transform-spread', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-transform-template-literals', { loose: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-syntax-async-generators'],
      ['@babel/plugin-transform-react-jsx'],
      ['@babel/plugin-transform-arrow-functions'],
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-proposal-export-default-from'],
      ['@babel/plugin-proposal-export-namespace-from'],
      ['@babel/plugin-transform-react-constant-elements'],
      ['@babel/plugin-transform-react-inline-elements'],
      ['react-hot-loader/babel'],
      ['@babel/plugin-transform-async-to-generator'],
    ],
    comments: true,
  }
}
