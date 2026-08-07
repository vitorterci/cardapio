/* ============================================================
   PAES.JS - Lógica do cardápio de pães
   ============================================================ */

const paesRegulares = [
  { nome: "Pão Francês", preco: "R$ 2,50", descricao: "Pão francês fresco e crocante, assado na hora." },
  { nome: "Pão na Chapa", preco: "R$ 6,00", descricao: "Pão francês passado na chapa com manteiga." },
  { nome: "Pão de Fermentação Natural", preco: "R$ 8,00", descricao: "Pão rústico de longa fermentação, com casca crocante." },
  { nome: "Focaccia de Alecrim", preco: "R$ 9,00", descricao: "Focaccia italiana com alecrim e azeite extravirgem." },
  { nome: "Pão Australiano", preco: "R$ 7,50", descricao: "Pão escuro com toque adocicado, textura macia." },
  { nome: "Bisnaguinha", preco: "R$ 5,00", descricao: "Porção de bisnaguinhas artesanais quentinhas." },
  { nome: "Pão de Alho", preco: "R$ 8,50", descricao: "Pão tostado com creme de alho e salsinha." },
  { nome: "Torrada da Casa", preco: "R$ 4,50", descricao: "Fatias de pão integral crocantes, feitas na casa." }
];

const paesEspeciais = {
  lactose: [
    { nome: "Pão de Aveia Sem Lactose", preco: "R$ 7,00", descricao: "Pão caseiro feito com leite de aveia, zero lactose." },
    { nome: "Ciabatta Vegana", preco: "R$ 8,00", descricao: "Ciabatta crocante sem nenhum derivado de leite." },
    { nome: "Pão de Batata Sem Lactose", preco: "R$ 6,50", descricao: "Pão macio de batata preparado sem manteiga." },
    { nome: "Broa de Milho Vegana", preco: "R$ 5,50", descricao: "Broa tradicional adaptada sem ingredientes de origem animal." }
  ],
  fodmaps: [
    { nome: "Pão de Arroz Low FODMAP", preco: "R$ 8,00", descricao: "Pão artesanal feito com farinha de arroz, livre de FODMAP." },
    { nome: "Pão Sourdough de Polvilho", preco: "R$ 9,00", descricao: "Fermentação longa com polvilho, mais fácil de digerir." },
    { nome: "Broa de Milho Simples", preco: "R$ 6,00", descricao: "Broa sem açúcar de trigo ou mel, versão Low FODMAP." },
    { nome: "Pão de Quinoa e Semente", preco: "R$ 9,50", descricao: "Pão nutritivo de quinoa, sem trigo e sem lactose." }
  ],
  cafeina: [
    { nome: "Pão de Fermento Natural", preco: "R$ 7,50", descricao: "Pão rústico sem aditivos, naturalmente livre de cafeína." },
    { nome: "Pão de Batata Doce", preco: "R$ 7,00", descricao: "Pão suave adocicado pela batata doce, sem estimulantes." },
    { nome: "Pão Integral de Sementes", preco: "R$ 8,00", descricao: "Pão integral com linhaça e gergelim, perfeito a qualquer hora." },
    { nome: "Pão de Milho Sem Cafeína", preco: "R$ 6,50", descricao: "Pão tradicional de milho, sem cafeína e sem lactose." }
  ],
  gluten: [
    { nome: "Pão de Fermentação Natural", preco: "R$ 8,00", descricao: "Pão rústico de longa fermentação, com casca crocante." },
    { nome: "Focaccia de Alecrim", preco: "R$ 9,00", descricao: "Focaccia italiana com alecrim e azeite extravirgem." },
    { nome: "Pão Australiano", preco: "R$ 7,50", descricao: "Pão escuro com toque adocicado, textura macia." },
    { nome: "Ciabatta Artesanal", preco: "R$ 8,50", descricao: "Ciabatta clássica com miolo alveolado e casca dourada." }
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

function renderizarPaesEspeciais() {
  renderizar('paes-especiais', paesEspeciais[abaAtiva]);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.aba-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.aba-btn').forEach(b => b.classList.remove('ativo'));
      this.classList.add('ativo');
      abaAtiva = this.dataset.aba;
      renderizarPaesEspeciais();
    });
  });

  renderizar('paes-regulares', paesRegulares);
  renderizarPaesEspeciais();
});
