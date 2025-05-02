import { defineConfig } from 'vite';

export default defineConfig({
    assetsInclude: ['**/*.mustache'],
    base: './',
    build: {
        minify: true,
        cssMinify: true,
        rollupOptions: {
            input: {
                main: './index.html',
            },
        },
    },
    resolve: {
        alias: {
            '@icons': './src/assets/icons',
            '@images': './src/assets/images',
        },
    },
});
