import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const config =  [
  {
    input: './src/index.ts',
    output: {
      file: './lib/index.js',
      format: 'umd',
      name: 'parse-json-with-dates',
    },
    plugins: [typescript(), nodeResolve()],
  },
]

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'production') {
  config[0].plugins.push(terser())
}

export default config
