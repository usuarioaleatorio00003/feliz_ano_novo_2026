# 🚀 Como Executar o Projeto

## Início Rápido (3 Opções)

### Opção 1: Servidor Python Simples (Recomendado)
```bash
# Navegue para o diretório do projeto
cd "caminho/para/projeto"

# Execute o servidor Python (Python 3)
python -m http.server 8000

# Abra o navegador em:
http://localhost:8000
```

### Opção 2: Servidor HTTP Node.js
```bash
# Instale o http-server globalmente (uma vez)
npm install -g http-server

# Navegue para o diretório do projeto
cd "caminho/para/projeto"

# Execute o servidor
http-server -p 8000

# Abra o navegador em:
http://localhost:8000
```

### Opção 3: VS Code Live Server
1. Instale a extensão "Live Server" no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione "Open with Live Server"
4. Abre automaticamente no navegador

## Por que usar um Servidor Local?

Ao abrir arquivos HTML diretamente (protocolo `file://`), os navegadores bloqueiam:
- ✗ Importações de módulos ES6 (política CORS)
- ✗ Alguns recursos JavaScript
- ✗ Carregamento de fontes de URLs
- ✗ Solicitações Fetch

Com um servidor local (`http://localhost`):
- ✓ Todos os módulos JavaScript funcionam
- ✓ Partículas e fogos de artifício animam
- ✓ Recursos interativos completos
- ✓ Renderização de fonte adequada
- ✓ Desempenho ideal

## O que funciona sem um servidor?

Mesmo sem um servidor (abrindo `index.html` diretamente):
- ✓ Todo HTML e CSS
- ✓ Links de navegação básicos
- ✓ Layout responsivo
- ✓ A maioria dos estilos e animações
- ✓ Rolagem suave (2025.html tem fallback)
- ✗ Efeitos de partículas (requer carregamento de módulo)
- ✗ Canvas de fogos de artifício (requer carregamento de módulo)

## Testando

Após iniciar o servidor, verifique:
1. Navegue para `http://localhost:8000`
2. Clique em "🚀 Tech 2025" na navegação
3. Teste o botão "Explorar Atualizações" (deve rolar)
4. Teste o botão "Lançar Animação" (fogos de artifício)
5. Teste o botão "Voltar ao Início"
6. Verifique o console para erros (F12)

## Solução de Problemas

### Porta já em uso
```bash
# Use uma porta diferente
python -m http.server 8080
# Então abra: http://localhost:8080
```

### Python não encontrado
- Instale o Python de python.org
- Ou use a opção Node.js

### Erros de Módulo no Console
- Deve usar servidor local (não file://)
- Verifique se todos os arquivos estão no mesmo diretório
- Verifique se script.js e a pasta js/ existem

## Implantação em Produção

Para hospedar online:
1. Faça upload de todos os arquivos para o host da web
2. Garanta que a estrutura de diretórios seja mantida
3. Teste no domínio real
4. Nenhum servidor necessário (o host da web fornece HTTP)

---

**Nota**: A página 2025.html tem JavaScript de fallback que permite que a navegação básica e a rolagem funcionem mesmo sem um servidor, mas para a experiência completa com animações, use um servidor local!
