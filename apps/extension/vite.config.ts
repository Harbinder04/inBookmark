import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src/popup/popup.html'),
                options: resolve(__dirname, 'src/options/options.html'),
                background: resolve(__dirname, 'src/background/background.js'),
                content: resolve(__dirname, 'src/content/content.js')
            },
            output: {
                entryFileNames: '[name].ts',
                chunkFileNames: '[name].ts',
                assetFileNames: '[name].[ext]'
            }
        }
    }
})
