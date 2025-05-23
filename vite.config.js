import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      overlay: false,
    },
    allowedHosts: [
      "abdelhadiseddar", 
      "localhost",
      "10.0.0.2"
    ],

    
  },
})

