import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  output: {
    format: 'cjs',
  },
  external: ['electron', 'electron-is-dev', 'fs', 'path'],
  plugins: [
    cleanup(),
    nodeResolve(),
    url(),
    json({
      include: [
        'dist/**',
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
