
# Golden Raspberry Awards

## Sobre o Projeto
Este projeto analisa os dados de premiação do Golden Raspberry Awards para determinar informações como piores filmes e períodos de intervalo entre prêmios.

## Pré-requisitos
Antes de iniciar, certifique-se de ter o seguinte instalado:
- **Java 11** ou superior
- **Maven** para gerenciamento de dependências
- Banco de Dados (se aplicável)

## Configuração
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto.git
   cd projeto
   ```

2. Instale as dependências:
   ```bash
   mvn install
   ```

3. Configure o ambiente:
   - Edite o arquivo `application.properties` localizado em `src/main/resources` com os dados de configuração do banco de dados e outras propriedades.

## Execução
1. Para rodar o projeto:
   ```bash
   mvn spring-boot:run
   ```

2. Acesse o sistema em:
   ```
   http://localhost:8080
   ```

## Testes
O projeto utiliza a pirâmide de testes, incluindo:
- **Testes Unitários**: Testam funções individuais.
- **Testes de Integração**: Validam a comunicação entre componentes.
- **Testes End-to-End (E2E)**: Simulam interações completas no sistema.

### Executando os testes
1. Para executar todos os testes:
   ```bash
   mvn test
   ```

2. Resultados dos testes serão exibidos no console.

## Estrutura do Projeto
- `src/main/java`: Código fonte principal.
- `src/test/java`: Código dos testes unitários e de integração.
- `src/main/resources`: Configurações do sistema.

## Contato
Para dúvidas ou suporte:
- **Email**: suporte@exemplo.com
- **Documentação**: Consulte o manual na pasta `docs`.

