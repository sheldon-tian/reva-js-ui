import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        ts({
            tsconfig: 'tsconfig.json',
        }),
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        json(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        serve({
            contentBase: ["public"],
            port: 3001,
        }),
        livereload({
            watch: 'public'
        })
    ]
};