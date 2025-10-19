import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https://github.com/Radhika7019-Parvam/react.git/',  // 👈 replace with your GitHub repo name
  plugins: [react()],
})