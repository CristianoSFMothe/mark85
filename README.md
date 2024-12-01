# **Mark85**  

🚀 **Automação de Testes Avançada com Cypress e Allure Report**  

O **Mark85** é um projeto voltado para a automação de testes utilizando Cypress, para um sistema de criação de tarefas, com suporte a relatórios detalhados e elegantes gerados pelo Allure Report. Este repositório é organizado em três pacotes principais (API, Web e Mail) para facilitar a modularização e execução de testes em diferentes contextos.

Além disso, o pacote Mail utiliza o CloudAMQP (RabbitMQ como serviço) para a troca de mensagens e o banco de dados MongoDB para armazenamento de informações.

---

## **📋 Pré-requisitos**  

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:  
- [Node.js](https://nodejs.org)  
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)  
- [WSL2 (Windows Subsystem for Linux)](https://learn.microsoft.com/pt-br/windows/wsl/install) (opcional para usuários Windows)  
- Python (necessário para visualizar relatórios gerados como arquivos estáticos)
- RabbitMQ ou CloudAMQP configurado para o serviço de mensagens.
- MongoDB (local ou em um serviço como o Atlas) configurado para o banco de dados.

---

## **🔧 Instalação**  

1. Clone o repositório:  
   ```bash  
   git clone https://github.com/CristianoSFMothe/mark85.git  
   ```  
2. Acesse o diretório do projeto:  
   ```bash  
   cd mark85  
   ```  
3. Instale as dependências:  
   ```bash  
   npm install  
   ```  

### Passo 2: Instale as Dependências de Cada Pacote

O projeto está organizado em três pacotes principais:

**API:** Testes e configurações relacionadas à API.
**Web:** Testes e configurações para aplicações web.
**Mail:** Testes e automações para serviços de email.

Para instalar as dependências, navegue até o diretório correspondente e execute o comando `npm i.`

Exemplo de Instalação:

1. Acesse o diretório da API:

```bash
cd mark85/API  
npm i  
```

2. Acesse o diretório da Web e instale as dependências:

```bash
cd ../Web  
npm i  
```

3. Acesse o diretório do Mail e instale as dependências:

```bash
cd ../Mail  
npm i
```  

---

## **🚀 Executando os Testes**  

Para rodar os testes automatizados:  
```bash  
npx cypress open  
```  

---

## **📊 Gerando Relatórios com Allure Report**  

### **Passo 1: Executar os testes e gerar resultados**  
Ao rodar os testes, o Cypress gera automaticamente os resultados no formato compatível com o Allure.  

### **Passo 2: Criar relatórios estáticos**  
Para gerar relatórios que podem ser acessados posteriormente:  
```bash  
npx allure generate allure-results --clean -o allure-report  
```  

### **Passo 3: Configurar um servidor para acessar o relatório**  
No ambiente **WSL2**, utilize o comando abaixo para iniciar um servidor local e visualizar o relatório:  
```bash  
python3 -m http.server 8080 --directory allure-report  
```  

Acesse o relatório no navegador em:  
```
http://localhost:8080  
```  

---

## **🛠 Tecnologias Utilizadas**  
- **Cypress**: Framework de testes para aplicações web e APIs.  
- **Allure Report**: Ferramenta para gerar relatórios detalhados e interativos.  
- **Node.js**: Ambiente de execução para JavaScript no servidor.  
- **Python**: Para configurar um servidor local simples (opcional).
- RabbitMQ: Serviço de mensagens (via CloudAMQP) utilizado no pacote Mail.
- MongoDB: Banco de dados utilizado para armazenamento de dados no pacote Mail.
- Node.js: Ambiente de execução para JavaScript no servidor.

---

## **🤝 Contribuições**  

Contribuições são sempre bem-vindas! Sinta-se à vontade para enviar issues ou pull requests.  


## **📝 Licença**  
Este projeto está licenciado sob a licença [MIT](LICENSE).  

---

Gostou do projeto? ⭐ Dê um **star** e compartilhe com a comunidade!  
