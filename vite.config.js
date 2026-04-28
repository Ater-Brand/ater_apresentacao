// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    devSourcemap: true,   // sourcemaps do SCSS aparecem no DevTools do browser
  },
  server: {
    port: 3000,
    open: true,           // abre o browser automaticamente ao rodar npm run dev
  },
})