import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Router from 'vite-plugin-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
