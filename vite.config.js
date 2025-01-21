import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './',
  base: "https://github.com/SamuelS2003/Portfolio-Samuel-.git",
  build: {
    outDir: "dist",},

  plugins: [react()],
})
