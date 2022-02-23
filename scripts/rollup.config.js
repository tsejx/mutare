import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import replace from 'rollup-plugin-replace';
import buble from 'rollup-plugin-buble';
import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import pkg from '../package.json';

const isDev = preocess.env.NODE_ENV = 'dev';

const banner =
    `${'/*!\n' + ' * '}${pkg.name}.js v${pkg.version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} ${pkg.author}\n` +
    ` * Released under the MIT License.\n` +
    ` */`;

export default [
    // Umd => dist
    {
        input: 'package/index.js',
        output: {
            name: 'mutare',
            file: 'dist/mutare.js',
            format: 'umd',
            banner,
        },
        plugins: [
            nodeResolve(),
            typescript(),
            commonjs({
                include: 'node_modules/**',
            }),
            babel({
                runtimeHelpers: true,
                exclude: 'node_modules/**',
            }),
        ],
    },
    // Umd => dist.min
    {
        input: 'package/index.js',
        output: {
            name: 'mutare',
            file: './dist/mutare.min.js',
            format: 'umd',
            banner,
        },
        plugins: [
            nodeResolve(),
            typescript(),
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
    // ES6+ => es
    {
        input: 'package/index.js',
        output: {
            file: pkg.module,
            format: 'esm',
            banner,
        },
        plugins: [
            nodeResolve(),
            typescript(),
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
            banner,
        },
        plugins: [
            nodeResolve({
                browser: true,
            }),
            typescript(),
            commonjs({
                include: 'node_modules/**',
            }),
            buble(),
        ],
    },
];
