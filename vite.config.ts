import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      root: '.',
      publicDir: 'public',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      preview: {
        port: 4173,
        host: '0.0.0.0',
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
            },
          },
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@utils': path.resolve(__dirname, './src/utils'),
        }
      }
    };
});
