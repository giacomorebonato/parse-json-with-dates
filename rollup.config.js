import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: './src/index.ts',
    output: {
      file: './lib/index.esm.js',
      format: 'esm',
      name: 'parse-json-with-dates',
    },
    plugins: [typescript(), nodeResolve()],
  },
  {
    input: './src/index.ts',
    output: {
      file: './lib/index.js',
      name: 'parse-json-with-dates',
    },
    plugins: [typescript(), nodeResolve()],
  },
]
