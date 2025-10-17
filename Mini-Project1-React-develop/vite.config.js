import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/carta-que-cambia-de-color-/', // 👈 importante: debe tener slash inicial y final
})
