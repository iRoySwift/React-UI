import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear';
// import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-react-svg';
// import { writeFileSync } from 'fs';
// import path from 'path';

const external = ['react', 'prop-types', 'overlayscrollbars'];
const output = [
  { file: './dist/es/index.js', format: 'esm' }, // (ES Modules)
  { file: './dist/cjs/index.js', format: 'cjs' },
];

export default {
  input: './src/index.js', // (组件主入口，相对路径)
  external,
  output,
  name: 'my-library',
  plugins: [
    resolve(),
    filesize(),
    clear({
      targets: ['dist'],
      watch: true,
    }),
    postcss({
      plugins: [],
      extract: true,
      minimize: false,
      sourceMap: false,
    }),
    // sass({
    //   output: styles => writeFileSync(path.resolve('./dist', 'index.css'), styles),
    //   options: {
    //     importer(url) {
    //       return url.startsWith('~') && ({
    //         file: `${process.cwd()}/node_modules/${url.slice(1)}`
    //       })
    //     }
    //   }
    // }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    svg(),
  ],
};