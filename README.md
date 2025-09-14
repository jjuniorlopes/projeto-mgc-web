# Planejamento Estratégico de Referência - Consórcios Multifinalitários

## Descrição do Projeto

Este é um site interativo que apresenta o Planejamento Estratégico de Referência dos Consórcios Multifinalitários da Bahia. O projeto foi desenvolvido para ser uma plataforma moderna, visualmente coesa e funcional, oferecendo uma experiência de navegação clara e intuitiva para apresentar os principais componentes do planejamento.

## Estrutura do Projeto

```
projeto_web/
├── index.html                  # Página principal (Hub)
├── css/
│   └── styles.css              # Estilos CSS globais
├── js/
│   ├── script.js               # JavaScript da página principal
│   └── cadeia_script.js        # JavaScript da página Cadeia de Valor
├── imagens/
│   ├── ... (diversas imagens)
├── pages/
│   ├── cadeia_de_valor.html    # Página interativa da Cadeia de Valor
│   ├── indicadores.html        # Página de Indicadores em formato de cards
│   └── iniciativas.html        # (Página de apoio, não linkada diretamente)
└── README.md                   # Este arquivo de documentação
```

## Funcionalidades e Melhorias

### Geral
- **Identidade Visual Consistente**: Cabeçalhos e rodapés padronizados em todas as páginas para uma experiência unificada.
- **Navegação Intuitiva**: Links internos agora carregam na mesma aba do navegador, e as páginas secundárias contêm um link de "Voltar".

### Página Principal (`index.html`)
- **Banner Principal**: Um banner visualmente impactante no topo da página.
- **Navegação com Logo**: O menu de navegação fixo inclui a logomarca do Governo da Bahia.
- **Pilares Interativos**: Botões coloridos (azul, verde, vermelho) que abrem modais com as descrições dos objetivos estratégicos.
- **Seções de Acesso**: Links diretos e estilizados para as páginas de "Cadeia de Valor" e "Indicadores".

### Página Cadeia de Valor (`cadeia_de_valor.html`)
- **Layout Moderno**: Reestruturada para um fluxo vertical com seções claras, substituindo o layout de três colunas.
- **Cards com Ícones**: As atividades são apresentadas em cards com bordas coloridas para categorização (Suporte, Primárias, Interessados) e ícones para rápida identificação visual.
- **Modais Interativos**: Ao clicar em uma "Atividade Primária", um modal surge na tela exibindo uma tabela detalhada com requisitos, métricas e ações.

### Página de Indicadores (`indicadores.html`)
- **Visualização em Cards**: A tabela de indicadores foi transformada em uma grade de cards interativos, melhorando drasticamente a legibilidade e a estética.
- **Destaque Visual**: Cada card destaca a sigla do indicador, o nome completo, o objetivo estratégico e a fórmula de cálculo de forma organizada.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: 
  - Flexbox e Grid para layouts complexos e responsivos.
  - Variáveis CSS para um tema consistente.
  - Animações e transições para uma experiência mais fluida.
- **Tailwind CSS (CDN)**: Utilizado na página `cadeia_de_valor.html` para agilizar a criação do layout em cards.
- **JavaScript (ES6+)**:
  - Manipulação do DOM para criar modais e elementos interativos.
  - Arquitetura baseada em `data-attributes` para vincular elementos HTML a dados.

## Como Executar Localmente

1.  **Baixe os arquivos** do projeto e mantenha a estrutura de pastas.
2.  **Abra o arquivo `index.html`** diretamente no seu navegador de preferência (Chrome, Firefox, Edge).
3.  Para uma melhor experiência (evitar problemas de CORS, caso adicione mais funcionalidades), use a extensão **"Live Server"** no Visual Studio Code.

## Próximos Passos

1. **Otimização**: Minificar arquivos CSS e JS e comprimir imagens para produção.
2. **Acessibilidade (WCAG)**: Realizar testes de contraste de cores e navegação por teclado.
3. **SEO**: Adicionar meta tags descritivas para melhor indexação em motores de busca.