import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/db.json': new URL('./db.json', import.meta.url).pathname
    }
  }
});