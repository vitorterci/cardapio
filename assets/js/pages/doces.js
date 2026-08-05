/* ============================================================
   DOCES.JS - Lógica do cardápio de doces
   ============================================================ */

   const docesRegulares = [
    { nome: "Brigadeiro Tradicional", preco: "R$ 8,00", descricao: "Brigadeiro cremoso feito com chocolate de qualidade." },
    { nome: "Beijinho de Coco", preco: "R$ 8,00", descricao: "Doce de coco ralado com leite condensado." },
    { nome: "Olho de Sogra", preco: "R$ 9,00", descricao: "Ameixa com cobertura de chocolate." },
    { nome: "Romeu e Julieta", preco: "R$ 10,00", descricao: "Goiabada com queijo derretido." },
    { nome: "Doce de Leite Cremoso", preco: "R$ 7,50", descricao: "Doce de leite artesanal e cremoso." },
    { nome: "Bolo de Chocolate", preco: "R$ 12,00", descricao: "Bolo de chocolate úmido e delicioso." }
  ];
  
  const docesFrios = [
    { nome: "Pavê de Chocolate", preco: "R$ 14,00", descricao: "Pavê com camadas de chocolate e biscoito." },
    { nome: "Torta de Morango", preco: "R$ 16,00", descricao: "Torta fresca com morangos selecionados." },
    { nome: "Mousse de Maracujá", preco: "R$ 11,00", descricao: "Mousse leve e cremosa de maracujá." },
    { nome: "Pudim de Leite", preco: "R$ 10,00", descricao: "Pudim tradicional bem cremoso." },
    { nome: "Sorvete Caseiro", preco: "R$ 9,00", descricao: "Sorvete artesanal da casa." },
    { nome: "Taça da Casa", preco: "R$ 15,00", descricao: "Sobremesa especial servida em taça." }
  ];
  
  const docesEspeciais = {
    lactose: [
      { nome: "Brigadeiro Vegano", preco: "R$ 9,00", descricao: "Brigadeiro feito com leite vegetal." },
      { nome: "Beijinho Vegano", preco: "R$ 9,00", descricao: "Beijinho sem lactose com coco." },
      { nome: "Bolo de Chocolate Vegano", preco: "R$ 13,00", descricao: "Bolo de chocolate totalmente vegano." },
      { nome: "Mousse de Chocolate Vegano", preco: "R$ 12,00", descricao: "Mousse cremosa sem lactose." }
    ],
    fodmaps: [
      { nome: "Brigadeiro Low FODMAP", preco: "R$ 10,00", descricao: "Brigadeiro apropriado para dieta Low FODMAP." },
      { nome: "Bolo Simples Low FODMAP", preco: "R$ 11,00", descricao: "Bolo sem ingredientes FODMAP." },
      { nome: "Pudim Low FODMAP", preco: "R$ 10,00", descricao: "Pudim cremoso Low FODMAP." },
      { nome: "Biscoito Low FODMAP", preco: "R$ 7,00", descricao: "Biscoito crocante Low FODMAP." }
    ],
    cafeina: [
      { nome: "Brigadeiro Sem Cafeína", preco: "R$ 8,00", descricao: "Brigadeiro sem cafeína." },
      { nome: "Mousse de Chocolate Branco", preco: "R$ 11,00", descricao: "Mousse de chocolate branco." },
      { nome: "Bolo de Baunilha", preco: "R$ 10,00", descricao: "Bolo de baunilha macio." },
      { nome: "Pavê de Baunilha", preco: "R$ 13,00", descricao: "Pavê de baunilha delicioso." }
    ]
  };
  
  let abaAtiva = 'lactose';
  
  function renderizar(id, lista) {
    const container = document.getElementById(id);
    if (!container) return;
    
    container.innerHTML = lista.map(item => `
      <div class="produto-cardapio" onclick="abrirModal('${item.nome.replace(/'/g, "\\'")}', '${item.preco}', '${item.descricao.replace(/'/g, "\\'")}')">
        <strong>${item.nome.toUpperCase()}</strong>
        <span class="preco-item">${item.preco}</span>
      </div>
    `).join('');
  }
  
  function renderizarDocesEspeciais() {
    renderizar('doces-especiais', docesEspeciais[abaAtiva]);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.aba-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.aba-btn').forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
        abaAtiva = this.dataset.aba;
        renderizarDocesEspeciais();
      });
    });
  
    renderizar('doces-regulares', docesRegulares);
    renderizar('doces-frios', docesFrios);
    renderizarDocesEspeciais();
  });