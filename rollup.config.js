import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import pkg from './package.json';

// const isDev = preocess.env.NODE_ENV = 'dev';

export default [
    // Umd => dist
    {
        input: 'package/index.js',
        output: {
            name: 'mutare',
            file: './dist/mutare.min.js',
            format: 'umd',
        },
        plugins: [
            nodeResolve(),
            commonjs({
                include: 'node_modules/**',
            }),
            babel({
                runtimeHelpers: true,
                exclude: 'node_modules/**',
            }),
            uglify({}, minify),
        ],
    },
    // ES+6 => es
    {
        input: 'package/index.js',
        output: {
            file: pkg.module,
            format: 'esm',
        },
        plugins: [
            nodeResolve(),
            buble({
                // objectAssign: 'Object.assign',
                exclude: ['node_modules/**'],
            }),
        ],
    },
    // CommonJS => lib
    {
        input: 'package/index.js',
        output: {
            file: pkg.main,
            format: 'cjs',
            // indent: false,
        },
        plugins: [
            nodeResolve({
                browser: true,
            }),
            commonjs({
                include: 'node_modules/**',
            }),
            buble(),
        ],
    },
];
