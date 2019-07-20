// import url from 'rollup-plugin-url';
// import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
// import globals from 'rollup-plugin-node-globals';
// import nodeBuiltins from 'rollup-plugin-node-builtins';
// import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/app/main/index.js',
  output: {
    name: 'main',
    file: pkg.main,
    format: 'cjs',
  },
  treeshake: true,
  external: [ 'electron', 'fs', 'path' ],
  plugins: [
    // nodeBuiltins(),
    nodeResolve(),
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      include: [
        'dist/**',
        'node_modules/**',
      ],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: true // Default: true
    }),

    terser(),
    // nodeResolve({
    //   preferBuiltins: false,
    // }),
    // url(),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    // globals(),
    // external(),

    commonjs(),
  ],
}
