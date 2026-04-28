// ════════════════════════════════════════
// cursor.js — Cursor personalizado: cruz dourada ✝
// ════════════════════════════════════════

/**
 * Cria e injeta um cursor customizado (✝ dourado)
 * que acompanha o movimento do mouse com leve suavização.
 * Desativado em dispositivos touch para não poluir a tela.
 */
export function initCursor() {
  // Não inicializa em touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.createElement('div');
  cursor.setAttribute('aria-hidden', 'true');
  cursor.id = 'ater-cursor';

  Object.assign(cursor.style, {
    position:      'fixed',
    pointerEvents: 'none',
    zIndex:        '9999',
    color:         '#c9a84c',
    fontSize:      '0.9rem',
    opacity:       '0',                         // começa invisível
    transform:     'translate(-50%, -50%)',
    transition:    'top 0.08s linear, left 0.08s linear, opacity 0.3s ease',
    fontFamily:    'serif',
    userSelect:    'none',
    lineHeight:    '1',
  });

  cursor.textContent = '✝';
  document.body.appendChild(cursor);

  let visible = false;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top  = `${e.clientY}px`;

    // Aparece na primeira movimentação
    if (!visible) {
      cursor.style.opacity = '0.55';
      visible = true;
    }
  });

  // Esconde ao sair da janela
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    visible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '0.55';
    visible = true;
  });
}