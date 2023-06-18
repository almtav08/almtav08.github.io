import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                projects: 'projects.html',
                publications: 'publications.html',
                contact: 'contact.html',
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },
        outDir: 'docs'
    },
    publicDir: 'public'
})