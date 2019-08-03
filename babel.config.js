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
          node: 'current',
          chrome: 65,
          electron: '6.0.0',
        },
        corejs: 3,
        modules: false,
        useBuiltIns: 'entry',
        shippedProposals: true,
        forceAllTransforms: true,
        ignoreBrowserslistConfig: false,
      }],
      ['@babel/preset-typescript'],
      ['@babel/preset-react', { development }],
    ],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      ['babel-plugin-styled-components', {
        ssr: false,
        pure: true,
        minify: production,
        fileName: development,
        displayName: development,
        transpileTemplateLiterals: production,
      }],
      ['@babel/plugin-transform-runtime', {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false
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
      ['module-resolver', {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        root: ['./src'],
        alias: {
          '@': './src',
          app: './src/app',
          i18n: './src/i18n',
          utils: './src/utils',
          hooks: './src/hooks',
          store: './src/store',
          pages: './src/pages',
          theme: './src/theme',
          assets: './src/assets',
          layouts: './src/layouts',
          services: './src/services',
          settings: './src/settings',
          fragments: './src/fragments',
          components: './src/components',
          decorators: './src/decorators',
          svgstore: './src/assets/svgstore',
        }
      }],
    ],
    comments: true,
  }
}
