import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    publicDir: "public",
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src/popup/popup.html'),
                options: resolve(__dirname, 'src/options/options.html'),
                background: resolve(__dirname, 'src/background/background.ts'),
                content: resolve(__dirname, 'src/content/content.ts')
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        }
    }
})
