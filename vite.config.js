import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "vite-plugin-fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),fs({port:8081})],
  server: {
    origin: 'http://190.92.148.107:8080',

  }
})
