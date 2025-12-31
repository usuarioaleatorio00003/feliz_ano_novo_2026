# 🎉 Ano Novo 2026 - Experiência Web Interativa

Uma aplicação web deslumbrante e rica em recursos celebrando a chegada de 2026 com previsões, atualizações tecnológicas e experiências interativas de Ano Novo.

## ✨ Visão Geral do Projeto

Este projeto é um site abrangente de celebração de Ano Novo apresentando:
- **Página Principal** - Contagem regressiva, desejos, resoluções e celebrações
- **Página da Vidente** - Previsões personalizadas para 2026 com insights do zodíaco
- **Atualizações Tech 2025** - Uma revisão abrangente dos avanços tecnológicos

## 📁 Estrutura do Projeto

```
New_Year/
├── index.html                 # Página principal
├── README.md                  # Este arquivo
├── CHANGELOG.md              # Histórico de versões e alterações
├── /css/                     # Todas as folhas de estilo
│   ├── styles.css           # Estilo principal
│   ├── enhanced-styles.css  # Estilo de recursos aprimorados
│   ├── fortune-styles.css   # Estilo da página da vidente
│   ├── fortune-footer.css   # Rodapé da página da vidente
│   └── tech-styles.css      # Estilo da página Tech 2025
├── /js/                      # Módulos JavaScript
│   ├── script.js            # Aplicação principal
│   ├── animations.js        # Animações de partículas e fogos de artifício
│   ├── countdown.js         # Lógica do cronômetro de contagem regressiva
│   ├── interactions.js      # Interações do usuário
│   ├── utils.js             # Funções utilitárias
│   ├── enhanced-features.js # Menu móvel, tema, música
│   └── fortune.js           # Lógica da vidente
├── /pages/                   # Páginas HTML adicionais
│   ├── fortune.html         # Página da Vidente
│   └── 2025.html            # Página de Atualizações Tech 2025
├── /images/                  # Ativos de imagem
│   ├── fortune_2026_logo.png
│   ├── tech_2025_hero_*.png
│   ├── ai_advancement_*.png
│   ├── quantum_computing_*.png
│   └── ... (outras imagens)
└── /favicon/                 # Ativos de favicon
    └── favicon.png
```

## 🚀 Recursos

### Página Principal (index.html)
- **Contagem Regressiva ao Vivo** - Contagem em tempo real para o Ano Novo 2026
- **Desejos Interativos** - Envie e salve desejos com localStorage
- **Rastreador de Resoluções** - Acompanhe o progresso com cartões interativos (+10% ao clicar)
- **Gerador de Resoluções Aleatórias** - Inspire-se com 20 ideias aleatórias
- **Galeria de Memórias** - Bela exibição de imagens
- **Carrossel de Citações** - Citações inspiradoras para o ano novo
- **Menu Móvel** - Navegação responsiva tipo hambúrguer
- **Alternância de Tema** - Modo Escuro/Claro (persistência em localStorage)
- **Controle de Música** - Música de fundo com alternância ligar/desligar
- **Celebrações com Confete** - Celebrações animadas nas interações

### Página da Vidente (fortune.html)
- **Previsões Personalizadas** - Baseadas no nome e mês de nascimento
- **Elementos da Sorte** - Previsões de cor, número e dia
- **Previsão de Energia Mensal** - Previsões de energia para 12 meses
- **Previsões do Zodíaco** - Previsões completas para todos os 12 signos
- **Mapa de Ano Novo Mundial** - Horários de celebração global (World Time API)
- **Áreas de Foco** - Principais áreas para focar em 2026
- **Conselho Estratégico** - Orientação personalizada

### Página de Atualizações Tech 2025 (2025.html)
- **Seção Hero** - Hero tech deslumbrante com animações
- **IA e Aprendizado de Máquina** - GPT-5, IA Generativa, IA na Saúde
- **Computação Quântica** - Processadores de 1000 qubits, Internet Quântica
- **Conectividade 5G/6G** - Evolução da rede e IoT
- **RV/RA/Metaverso** - Avanços em realidade estendida
- **Tecnologia Verde** - Inovações tecnológicas sustentáveis
- **Previsões Futuras** - Olhando para 2026
- **Estatísticas Animadas** - Animações de contador ao rolar
- **Linha do Tempo Interativa** - Outros grandes avanços
- **Celebrações com Confete** - Botão de animação de lançamento

## 🎨 Recursos de Design

- **Glassmorphism** - Efeitos modernos de desfoque de vidro
- **Animações de Gradiente** - Transições de cores dinâmicas
- **Rolagem Suave** - Navegação de página elegante
- **Efeitos de Partículas** - Partículas de fundo flutuantes
- **Design Responsivo** - Otimizado para celular, tablet e desktop
- **Fontes Personalizadas** - Google Fonts (Outfit, Playfair Display)
- **Tema Escuro** - Esquema de cores amigável aos olhos

## 🛠️ Tecnologias Usadas

- **HTML5** - Marcação semântica
- **CSS3** - Estilização avançada, animações, grid, flexbox
- **JavaScript (ES6+)** - Módulos, async/await, sintaxe moderna
- **LocalStorage API** - Salvar desejos, resoluções, preferências
- **World Time API** - Dados precisos de fuso horário global
- **Canvas Confetti** - Animações de celebração (CDN)
- **IntersectionObserver** - Animações acionadas por rolagem

## 📦 Instalação e Uso

### Desenvolvimento Local

1. **Clone ou Baixe** o repositório
2. **Abra a pasta do projeto**
3. **Inicie o index.html** no seu navegador
   - Clique duas vezes em `index.html`, ou
   - Use a extensão Live Server no VS Code

### Nota sobre Protocolo de Arquivo
Todos os módulos JavaScript funcionam com o protocolo `file://`. Nenhum servidor necessário!

### Dependências CDN
- Canvas Confetti: Carregado automaticamente do CDN
- Google Fonts: Carregado via CDN

## 🎯 Funcionalidades Principais

### Gerador de Destino
```javascript
// Gera destino personalizado baseado em:
- Nome (hash para randomização)
- Mês de nascimento (influência do zodíaco)
- Carimbo de data/hora atual
- Previsões mensais de energia
```

### Animação do Contador de Estatísticas
```javascript
// Anima número de 0 até o alvo
- Usa requestAnimationFrame
- Acionado por IntersectionObserver
- Efeito de contagem suave
```

### Atualizações do Relógio Mundial
```javascript
// Rastreamento de fuso horário em tempo real
- Busca da World Time API
- Fallback de cálculo do lado do cliente
- Atualiza a cada segundo
- Indicadores de status de celebração
```

## 📱 Breakpoints Responsivos

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Celular**: < 768px
- **Celular Pequeno**: < 480px

## 🎁 Recursos Especiais

### Persistência LocalStorage
- Desejos e resoluções salvos permanentemente
- Preferência de tema (escuro/claro)
- Preferência de música (ligado/desligado)
- Funcionalidade de exclusão para desejos

### Acessibilidade
- Elementos HTML5 semânticos
- Rótulos ARIA onde necessário
- Suporte à navegação por teclado
- Suporte a movimento reduzido
- Suporte a modo de alto contraste

### Desempenho
- Animações otimizadas (60 FPS)
- Carregamento lento (lazy loading) para imagens
- Eventos de rolagem com debounce
- RequestAnimationFrame para atualizações suaves
- Intersection Observer para observação eficiente do DOM

## 🌐 Suporte ao Navegador

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🎨 Paleta de Cores

```css
--primary-color: #667eea (Roxo)
--secondary-color: #f5576c (Rosa)
--accent-color: #00f2fe (Ciano)
--gold-color: #f6d365 (Dourado)
--bg-dark: #0a0a0f (Azul-Preto Escuro)
```

## 🔧 Personalização

### Atualizar Cores
Edite as variáveis CSS em `css/styles.css`:
```css
:root {
    --primary-color: #suaCor;
    --secondary-color: #suaCor;
}
```

### Adicionar Novos Destinos
Edite `js/fortune.js` - adicione aos arrays de previsão

### Modificar Alvo da Contagem Regressiva
Edite `js/countdown.js` - altere a data alvo

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e educacional.

## 👨‍💻 Autor

**Christian Amarildo**
- LinkedIn: [https://www.linkedin.com/in/christian-amarildo/](https://www.linkedin.com/in/christian-amarildo/)
- Email: cyberchristian92@gmail.com
- Criado com ❤️ e ✨

## 🎉 Versão

**Versão 2.0.0** - 30 de Dezembro de 2025

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para o histórico detalhado de versões.

## 🙏 Agradecimentos

- Biblioteca Canvas Confetti por [catdad](https://github.com/catdad/canvas-confetti)
- Google Fonts para tipografia
- World Time API para dados precisos de fuso horário
- Imagens geradas por IA para a página Tech 2025

## 🚀 Começando

1. Abra `index.html` no seu navegador
2. Explore os recursos da página principal
3. Clique em "🔮 Vidente" para obter sua previsão para 2026
4. Clique em "🚀 Tech 2025" para revisar as atualizações tecnológicas
5. Envie desejos e resoluções
6. Alterne o tema e a música conforme desejado
7. Aproveite a celebração de Ano Novo! 🎊

---

**Feito com ❤️ para celebrar o incrível ano de 2026!** ✨🎉

*Que seu ano seja cheio de alegria, sucesso e infinitas possibilidades!*
