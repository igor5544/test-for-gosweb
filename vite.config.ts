import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/*', // Все файлы из icons
                    dest: 'assets',
                },
            ],
        }),
    ],
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
