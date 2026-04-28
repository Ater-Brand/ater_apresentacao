// ════════════════════════════════════════
// scroll.js — IntersectionObserver para animações de entrada
// Exportado como módulo ES6 e importado por main.js
// ════════════════════════════════════════

/**
 * Inicializa o observer de scroll.
 * Adiciona a classe `.visible` em cada `.reveal`
 * quando o elemento ultrapassa o threshold configurado.
 */
export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Para de observar após revelar (otimização de performance)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Elemento começa a animar quando 12% dele está visível
      threshold: 0.12,

      // Margem negativa no topo para disparar um pouco antes
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}