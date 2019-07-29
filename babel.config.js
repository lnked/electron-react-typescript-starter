module.exports = (api) => {
  api.env()

  const production = api.env('production')
  const development = api.env('development')

  return {
    presets: [
      ['@babel/preset-env', {
        debug: development,
        loose: true,
        targets: {
          chrome: 65,
          electron: '5.0.8',
        },
        modules: false,
        useBuiltIns: false,
        shippedProposals: false,
      }],
      ['@babel/preset-typescript'],
      ['@babel/preset-react', { development }],
    ],
    plugins: [
      ['styled-components', {
        ssr: false,
        pure: true,
        minify: production,
        fileName: development,
        displayName: development,
        transpileTemplateLiterals: production,
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
