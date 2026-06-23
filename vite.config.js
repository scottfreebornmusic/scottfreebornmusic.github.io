import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain at the apex (scottfreeborn.com) -> base is '/'.
// If you ever host at username.github.io/repo instead, change base to '/repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
