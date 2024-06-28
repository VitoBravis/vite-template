import path from 'path';
import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: 'build',
        sourcemap: true
    },
    css: {
        postcss: path.resolve(__dirname, 'postcss.config.js'),
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                style: 'expanded'
            }
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: false
    },
    preview: {
        host: '0.0.0.0',
        port: 4000,
        open: true
    }
})