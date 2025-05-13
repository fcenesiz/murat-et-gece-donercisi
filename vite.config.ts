import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/murat-et-gece-donercisi/', // <--- BURASI ÖNEMLİ!
  plugins: [react()],
})
