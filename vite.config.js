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
        },
        outDir: 'docs'
    },
    publicDir: 'public'
})