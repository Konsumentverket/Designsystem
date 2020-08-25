import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
// import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer';
import path from 'path';

export default {
  input: path.resolve(__dirname, 'designsystem/components/index.js'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/main.js'),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: path.resolve(__dirname, 'dist/main.es.js'),
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    babel({
        presets: [
            '@babel/preset-env', '@babel/react'
        ],
        exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    visualizer()
  ]
}
