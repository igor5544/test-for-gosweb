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
    server: {
        open: true,
    },
});
