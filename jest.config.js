module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'test/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.js$': '<rootDir>/test/babel-jest.js',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  testRegex: '(/test/out/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '[\\/]{1}helpers[\\/]{1}'
  ],
  roots: [
    'test/out',
  ],
  modulePaths: [
    '<rootDir>/packages/electron-webpack/node_modules',
    '<rootDir>/packages'
  ]
};

