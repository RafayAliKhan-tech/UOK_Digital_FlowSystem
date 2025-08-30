import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: process.env.VITE_BASE_PATH || '/UOK_Digital_FlowSystem',   // 👈 base path from .env (fallback '/')
  base: './',   // 👈 base path from .env (fallback '/')
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

