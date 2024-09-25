import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
export default {
  server: {
    port: 5173, // or your desired port
    host: '0.0.0.0', // to allow external connections
  }
};

