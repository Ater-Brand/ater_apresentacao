// ════════════════════════════════════════
// main.js — Entry point JavaScript
// Importa e inicializa todos os módulos
// ════════════════════════════════════════

import { initScrollReveal } from './scroll.js';
import { initCursor }       from './cursor.js';

/**
 * Aguarda o DOM estar pronto antes de inicializar.
 * Uso de DOMContentLoaded garante que os elementos
 * já existem antes de aplicar observers e estilos.
 */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCursor();
});