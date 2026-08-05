/* ============================================================
   REFRIGERANTES.JS - Lógica do cardápio de refrigerantes
   ============================================================ */

// A página de refrigerantes é estática, mas mantemos o JS
// para possível expansão futura e compatibilidade com o modal

document.addEventListener('DOMContentLoaded', function() {
    // Itens clicáveis para abrir o modal
    document.querySelectorAll('.item').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function() {
        const nome = this.querySelector('span')?.textContent || 'Produto';
        const preco = this.querySelector('strong')?.textContent || 'R$ 0,00';
        abrirModal(nome, preco, 'Refrigerante gelado, perfeito para acompanhar seu lanche.');
      });
    });
  });