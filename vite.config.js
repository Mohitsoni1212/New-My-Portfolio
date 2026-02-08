import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/New-My-Portfolio/',   // ✅ GitHub repo ka exact name
})
