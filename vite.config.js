// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // ─────────────────────────────────────────────────────────
  // BASE PATH — IMPORTANTE para GitHub Pages
  //
  // Se o seu repositório se chamar "ater" e o usuário for "seunome",
  // o site ficará em: https://seunome.github.io/ater/
  // Nesse caso, base deve ser '/ater/'
  //
  // Se você usar um domínio customizado (ex: ater.com.br),
  // mude para base: '/'
  //
  // Troque 'ater' pelo nome EXATO do seu repositório no GitHub:
  // ─────────────────────────────────────────────────────────
  base: '/ater/',

  css: {
    devSourcemap: true,
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})