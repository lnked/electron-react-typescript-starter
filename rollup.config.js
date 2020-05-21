import dotenv from 'dotenv';
import { argv } from 'yargs';

import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';
import { terser } from 'rollup-plugin-terser';

const environment = Object.assign({}, dotenv.config().parsed, {
  NODE_ENV: (argv.environment || 'development'),
});

export default {
  output: {
    format: 'cjs',
  },
  external: ['electron', 'electron-is-dev', 'fs', 'path'],
  plugins: [
    cleanup(),
    replace({
      'process.env': JSON.stringify(environment),
    }),
    includePaths({
      include: {
        appConfig: `${__dirname}/public/config.js`,
      },
      paths: ['public', 'dest'],
      extensions: ['.json', '.js', '.html']
    }),
    nodeResolve(),
    url(),
    json({
      include: [
        'dest/**',
        'node_modules/**',
      ],
      preferConst: true,
      indent: '  ',
      compact: true,
      namedExports: true,
    }),
    commonjs(),
    terser(),
  ],
}
