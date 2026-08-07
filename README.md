# cardapio

Site do cardápio da cafeteria **Kaffee Für Alle**.

## Estrutura do projeto

```
cardapio/
├── index.html                       # Página inicial (menu central)
├── assets/
│   ├── css/
│   │   ├── main.css                 # Estilos globais (header, cards, footer, fontes)
│   │   ├── cardapios.css            # Estilos compartilhados das páginas de cardápio
│   │   └── components/modal.css     # Estilos do modal flutuante de produtos
│   ├── fonts/
│   │   └── TAN-NIMBUS.{woff2,woff,otf}  # Fonte especial dos preços
│   ├── img/
│   │   ├── logo-kaffee.png          # Logotipo (usado no header)
│   │   ├── icon-pesquisa.png        # Ícone de pesquisa
│   │   ├── simbolo-pesquisa.png
│   │   ├── fechar.png               # Ícone de fechar
│   │   ├── carrinho.png             # Ícone de carrinho
│   │   ├── perfil.png               # Ícone de perfil
│   │   ├── bebida.png               # Ilustração do card de bebidas (CSS background)
│   │   ├── salgados.png             # Ilustração do card de salgados (CSS background)
│   │   ├── doces.png                # Ilustração do card de doces (CSS background)
│   │   ├── paes.png                 # Ilustração do card de pães (CSS background)
│   │   └── *.png                    # Imagens de referência (não usadas no código)
│   └── js/
│       ├── main.js                  # JS global (footer dinâmico, barra de pesquisa)
│       ├── utils/modal.js           # Lógica do modal (abrirModal/fecharModal, reutilizada por todas as páginas)
│       └── pages/
│           ├── bebidas.js           # Dados e renderização do cardápio de bebidas
│           ├── doces.js             # Dados e renderização do cardápio de doces
│           ├── salgados.js          # Dados e renderização do cardápio de salgados
│           └── refrigerantes.js     # Interação do cardápio de refrigerantes
└── pages/
    ├── bebidas.html
    ├── doces.html
    ├── salgados.html
    ├── refrigerantes.html
    ├── noticias.html                # Leitor de manchetes (Jornais)
    └── musica.html                  # Player de vinil (Vitrola)
```

## Convenções

Todas as páginas de cardápio compartilham o mesmo modal (`modal.css` + `utils/modal.js`), chamando `abrirModal(nome, preco, descricao)`. Os caminhos de assets são sempre relativos: `../assets/` a partir de `pages/` e `assets/` a partir de `index.html`. Os nomes de arquivos usam kebab-case minúsculo, sem espaços nem acentos.