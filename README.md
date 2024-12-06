
# Golden Raspberry Awards Application

## Descrição
Esta aplicação foi desenvolvida para analisar e exibir informações sobre os vencedores do "Golden Raspberry Awards". Ela contém uma interface de dashboard, uma lista de filmes, e implementa testes automatizados usando Jasmine e Karma.

---

## Pré-requisitos
Antes de começar, você precisa ter instalado:
- Node.js (versão 12 ou superior)
- Angular CLI (compatível com a versão do Angular especificada no `package.json`)

---

## Configuração do Ambiente

1. **Clonando o Repositório**
   ```bash
   git clone https://github.com/JulioCol2021/golden_raspberry_awards.git
   cd golden_raspberry_awards
   ```

2. **Instalando Dependências**
   Execute o seguinte comando para instalar todas as dependências do projeto:
   ```bash
   npm install
   ```
   - **Nota Importante:** Se estiver utilizando o GitHub Codespaces, aguarde alguns minutos após a inicialização para que todas as dependências sejam carregadas automaticamente no ambiente.

---

## Executando a Aplicação

1. **Iniciar o Servidor**
   Para rodar a aplicação localmente, utilize o comando:
   ```bash
   ng serve
   ```
   - Acesse a aplicação no navegador em: `http://localhost:4200`

2. **Navegação**
   - **Dashboard:** Mostra o resumo e análise dos filmes vencedores.
   - **Lista de Filmes:** Exibe os filmes disponíveis com funcionalidades de paginação.

---

## Executando os Testes

1. **Iniciar os Testes**
   Use o seguinte comando para rodar os testes:
   ```bash
   npm test
   ```
   - O Karma abrirá automaticamente um navegador (Chrome) e exibirá os testes.

2. **Aguarde o Carregamento**
   - Pode haver uma demora no carregamento inicial da página de testes.
   - Se a página carregar em branco ou mostrar um erro, clique no botão `Debug` na interface do Karma para visualizar a lista completa de testes.

---

## Estrutura do Projeto

- **`src/`**: Contém os componentes e serviços do Angular.
- **`e2e/`**: Configurações e testes end-to-end.
- **`node_modules/`**: Dependências instaladas.
- **`karma.conf.js`**: Configurações do Karma para testes automatizados.

---

## Dicas e Resolução de Problemas

- Caso encontre erros durante a instalação de dependências, verifique se a versão do Node.js e do Angular CLI está compatível com o projeto.
- Em ambientes do Codespaces, mantenha a configuração padrão de navegador para evitar problemas na execução dos testes.
- Sempre execute `npm install` após clonar o repositório para garantir que todas as dependências estão atualizadas.

---

Caso tenha dúvidas, entre em contato com o desenvolvedor. 🚀
