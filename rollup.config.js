import path from 'path';
// import { writeFileSync } from 'fs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'; // 在 node_modules 中使用 node 解决算法( ) 来定位模块
import replace from 'rollup-plugin-replace';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear';
import cjs from 'rollup-plugin-commonjs';// 转换commonjs 为es6
import json from 'rollup-plugin-json'; // Convert .json files to ES6 modules
import svg from 'rollup-plugin-react-svg';
import alias from 'rollup-plugin-alias';
import { terser } from 'rollup-plugin-terser'; // 压缩js
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars'; // 可以使用Sass风格的变量
import nested from 'postcss-nested'; // 允许使用嵌套规则
import cssnext from 'postcss-cssnext';// 这个插件集使得大多数现代CSS语法(通过最新的CSS标准)可用
import cssnano from 'cssnano'; // 压缩，减小输出CSS文件大小。相当于JavaScript中对应的UglifyJS。

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
    alias({
      '@': path.resolve(__dirname, './src'),
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    clear({
      targets: ['dist'],
      watch: true,
    }),
    cjs(),
    filesize(),
    json(),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        // 在cssnext()中配置了{ warnForDuplicates: false }是因为它和cssnano()都使用了Autoprefixer，会导致一个警告。不用计较配置, 我们只需要知道它被执行了两次(在这个例子中没什么坏处)并且取消了警告。
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      inject: false,
      sourceMap: true,
      extensions: ['.css'],
      extract: true, // 输出路径
    }),
    resolve(),
    svg(),
    replace({
      exclude: 'node_modules',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && terser({
      output: {
        comments: 'all', // 保留所有注释
        ascii_only: true, // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ['console.log'], // 去掉console.log函数
      },
    }))
  ],
};
