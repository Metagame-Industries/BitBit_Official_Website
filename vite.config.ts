import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { getRootPath, getSrcPath } from './build'

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    server: {
      host: '0.0.0.0',
      port: 7777,
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})
