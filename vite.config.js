import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects.html'),
                publications: resolve(__dirname, 'publications.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
        outDir: 'docs'
    },
    publicDir: 'public'
})